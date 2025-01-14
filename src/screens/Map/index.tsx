import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './styles';
import { HeaderButtons } from '../../components/HeaderButtons';

export function Map({  navigation }: any) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Obtém a localização atual
    useEffect(() => {
        (async () => {
            // Solicita permissão para acessar a localização
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar localização foi negada.');
                return;
            }

            // Captura a localização atual
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.0075,
                longitudeDelta: 0.0075,
            });
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
