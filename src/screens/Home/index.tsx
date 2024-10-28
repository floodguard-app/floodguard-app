import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';

export function Home({ navigation } : any) {

    const navToConfig = () => {
        navigation.navigate('Configurations Screen')
    }

    return (
        <View style={styles.container}>
            <Text>Home works!</Text>
            <Button 
                title='Config'
                onPress={navToConfig}
            />
        </View>
    );
}