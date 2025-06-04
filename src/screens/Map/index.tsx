import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './styles';
import { HeaderButtons } from '../../components/HeaderButtons';

type LocationType = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
};

type LocationT = {
    "coords": {
        "accuracy": number, 
        "altitude": number, 
        "altitudeAccuracy": number, 
        "heading": number, 
        "latitude": number, 
        "longitude": number, 
        "speed": number
    }, 
    "mocked": boolean, 
    "timestamp": number
}

export function Map({  navigation }: any) {
    const [location, setLocation] = useState<LocationType | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Obtém a localização atual
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permissão para acessar localização foi negada.');
                    return;
                }
                let currentLocation = await Location.getCurrentPositionAsync({});
                console.log(currentLocation);
                setLocation({
                    latitude: -23.491835343235458, 
                    longitude: -46.75947943031476,
                    latitudeDelta: 0.0075,
                    longitudeDelta: 0.0075,
                });
            } catch (error:any) {
                setErrorMsg('Erro ao obter localização: ' + error.message);
            }
        })();
    }, []);
    

    return (
        <View style={styles.container}>
            <HeaderButtons navigation={navigation} />
            {location ? (
                <MapView
                    style={styles.map}
                    region={location}
                >
                    <Marker
                        coordinate={location}
                        title="Você está aqui"
                        description="Esta é sua localização atual"
                    />
                </MapView>
                ) : (
                <Text>{errorMsg || 'Obtendo localização...'}</Text>
            )}
        </View>
    );
}
