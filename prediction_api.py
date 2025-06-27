import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import requests
import google.generativeai as genai
from dotenv import load_dotenv
import json
import time

# Carregar variáveis de ambiente (suas chaves de API) de um arquivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# --- CONFIGURAÇÃO DAS CHAVES DE API ---
OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not OPENWEATHER_API_KEY or not GEMINI_API_KEY:
    raise ValueError("As chaves de API OPENWEATHER_API_KEY e GEMINI_API_KEY devem ser definidas no arquivo .env")

genai.configure(api_key=GEMINI_API_KEY)

DATA_DIR = './data/'

# --- MELHORIA: DEFINIR CIDADES VIZINHAS DE INTERESSE ---
# Dicionário com cidades próximas e suas coordenadas.
# Isso pode ser expandido ou movido para um arquivo de configuração no futuro.
NEARBY_LOCATIONS = {
    "Osasco": {"lat": -23.5325, "lon": -46.7917},
    "Carapicuíba": {"lat": -23.5222, "lon": -46.8358},
    "São Paulo (Centro)": {"lat": -23.5505, "lon": -46.6333},
    "Santo André": {"lat": -23.6644, "lon": -46.5381}
}

def get_weather_forecast(lat, lon):
    """Busca a previsão do tempo na API do OpenWeatherMap."""
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}&units=metric&lang=pt_br"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Erro ao chamar a API do OpenWeather: {e}")
        return None

def get_station_accumulated_data(station_id):
    # (Esta função permanece exatamente igual à versão anterior)
    file_path = None
    search_pattern = station_id.lower()
    for filename in os.listdir(DATA_DIR):
        if filename.lower().endswith(".csv") and search_pattern in filename.lower():
            file_path = os.path.join(DATA_DIR, filename)
            break
    if not file_path: return None
    try:
        df = pd.read_csv(file_path, delimiter=';', skiprows=8, decimal=',', encoding='latin-1')
        df.rename(columns={'Data': 'DATE', 'Hora UTC': 'TIME', 'PRECIPITAÇÃO TOTAL, HORÁRIO (mm)': 'PRECIPITATION'}, inplace=True)
        df = df[['DATE', 'TIME', 'PRECIPITATION']]
        df['TIME'] = df['TIME'].str.slice(0, 2) + ':00'
        df['DATETIME'] = pd.to_datetime(df['DATE'] + ' ' + df['TIME'], format='%Y/%m/%d %H:%M')
        df.set_index('DATETIME', inplace=True)
        df['PRECIPITATION'] = pd.to_numeric(df['PRECIPITATION'], errors='coerce').fillna(0)
        if df.empty: return None
        return {
            "last_hour_mm": df['PRECIPITATION'].rolling(window=1, min_periods=1).sum().iloc[-1],
            "last_6_hours_mm": df['PRECIPITATION'].rolling(window=6, min_periods=1).sum().iloc[-1],
            "last_24_hours_mm": df['PRECIPITATION'].rolling(window=24, min_periods=1).sum().iloc[-1],
            "latest_update_utc": df.index[-1].strftime('%Y-%m-%d %H:%M:%S')
        }
    except Exception as e:
        print(f"Erro ao processar arquivo CSV {file_path}: {e}")
        return None

def get_nearby_forecasts_summary():
    """Busca a previsão para as cidades vizinhas e cria um resumo."""
    summaries = []
    for city, coords in NEARBY_LOCATIONS.items():
        try:
            forecast = get_weather_forecast(coords['lat'], coords['lon'])
            if forecast and 'weather' in forecast:
                description = forecast['weather'][0]['description']
                summaries.append(f"{city}: {description}")
            else:
                summaries.append(f"{city}: dados indisponíveis")
            time.sleep(0.1) # Pequena pausa para não sobrecarregar a API
        except Exception as e:
            print(f"Erro ao buscar previsão para {city}: {e}")
            summaries.append(f"{city}: erro na consulta")
    return summaries


def analyze_with_gemini(forecast_data, historical_data, location_name, nearby_forecasts):
    """Envia os dados combinados, incluindo nome do local e previsões vizinhas, para o Gemini."""
    model = genai.GenerativeModel('gemini-1.5-flash')
    
    # Transforma a lista de previsões vizinhas em uma string formatada
    nearby_forecasts_str = "\n- ".join(nearby_forecasts)

    prompt = f"""
    Você é um especialista em meteorologia e hidrologia da Defesa Civil. Sua tarefa é analisar os dados de previsão do tempo e de chuva já ocorrida para determinar o risco de enchente em uma localidade, além de fornecer um panorama das cidades vizinhas.

    **Dados de Análise:**

    1. **Local da Análise Principal:** {location_name}

    2. **Previsão do Tempo para {location_name} (Próximas Horas):**
       - Condição: {forecast_data['weather'][0]['description']}
       - Temperatura: {forecast_data['main']['temp']}°C
       - Chance de chuva (se disponível): {forecast_data.get('rain', 'N/A')}

    3. **Dados Históricos de Chuva em {location_name} (Estação INMET):**
       - Chuva acumulada na última hora: {historical_data['last_hour_mm']:.1f} mm
       - Chuva acumulada nas últimas 6 horas: {historical_data['last_6_hours_mm']:.1f} mm
       - Chuva acumulada nas últimas 24 horas: {historical_data['last_24_hours_mm']:.1f} mm

    4. **Previsão para Cidades Vizinhas:**
       - {nearby_forecasts_str}

    **Sua Tarefa:**
    Com base em TODOS os dados acima, forneça uma análise de risco completa.
    
    Responda em formato JSON, seguindo estritamente esta nova estrutura, sem adicionar nenhuma explicação fora do JSON:
    {{
      "location_name": "{location_name}",
      "alert": {{
        "level": <int>,
        "level_name": "<string>",
        "message": "<string>"
      }},
      "analysis": {{
        "summary": "<string>",
        "recommendations": "<string>"
      }},
      "nearby_forecasts": [
        "<string>",
        "<string>"
      ]
    }}

    **Instruções para o preenchimento:**
    - "location_name": O nome da cidade principal analisada.
    - "level": Um inteiro de 0 a 3 (0: Sem Risco, 1: Atenção/Amarelo, 2: Alerta/Laranja, 3: Alerta Máximo/Vermelho).
    - "level_name": O nome do nível de alerta.
    - "message": Uma mensagem curta e direta para o usuário.
    - "summary": Um resumo técnico da sua análise para o local principal.
    - "recommendations": Recomendações práticas para a população.
    - "nearby_forecasts": Uma lista de strings, com cada string contendo a previsão resumida para uma cidade vizinha (ex: "Osasco: chuva leve"). Use a lista que foi fornecida.
    """
    try:
        response = model.generate_content(prompt)
        cleaned_response = response.text.strip().replace("```json", "").replace("```", "")
        return jsonify(json.loads(cleaned_response))
    except Exception as e:
        print(f"Erro ao chamar a API do Gemini: {e}")
        return jsonify({"error": "Falha na análise de IA."}), 500


@app.route('/predict/<station_id>', methods=['GET'])
def predict(station_id):
    lat = request.args.get('lat')
    lon = request.args.get('lon')

    if not lat or not lon:
        return jsonify({"error": "Os parâmetros 'lat' e 'lon' são obrigatórios."}), 400

    # 1. Busca dados históricos do CSV local
    historical_data = get_station_accumulated_data(station_id)
    if not historical_data:
        return jsonify({"error": f"Dados históricos para a estação '{station_id}' não encontrados."}), 404

    # 2. Busca a previsão do tempo para a localização principal do usuário
    forecast_data = get_weather_forecast(lat, lon)
    if not forecast_data:
        return jsonify({"error": "Não foi possível obter a previsão do tempo para a sua localização."}), 500
    
    # Extrai o nome da cidade da resposta da API de previsão
    location_name = forecast_data.get("name", "Localização Desconhecida")
    
    # 3. Busca a previsão para as cidades vizinhas
    nearby_forecasts = get_nearby_forecasts_summary()
    
    # 4. Envia tudo para o Gemini fazer a análise completa
    return analyze_with_gemini(forecast_data, historical_data, location_name, nearby_forecasts)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

