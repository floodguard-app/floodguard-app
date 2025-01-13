import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { FloodAlert } from '../../components/FloodAlert';
import { styles } from "./styles";
import { HeaderButtons } from '../../components/HeaderButtons';

export function Home({ navigation }: any) {
    const [floodAlertList, setFloodAlertList] = useState<Array<Object>>([
        {
            riskMessage: "Alto risco de enchentes para amanhã nas seguintes regiões:",
            regions: [
                "Jardim da Saúde",
                "Ipiranga",
                "Lapa",
                "Tamanduateí",
                "Rio Grande da Serra"
            ],
            warning: {
                message: "ATENÇÃO",
                details: "A sua região pode sofrer alagamentos de 0,5 m em breve.",
                link: "https://example.com",
            },
            id: '1',
        },
    ]);

  return (
    <View style={styles.container}>
    <HeaderButtons navigation={navigation} />
    <FlatList 
        style={styles.flatList}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
        data={floodAlertList}
        renderItem={({ item }) => <FloodAlert alert={item} />}
        keyExtractor={item => item.id} 
    />
    </View>
  );
}