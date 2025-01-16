import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

import { styles } from './styles';

export function AlertConfig() {

    const [ preferences, setPreferences ] = useState({
        receiveNotifications: true,
        onlyOwnRegion: false,
    })

    const toggleSwitch = (attributeName: string, value: boolean) => {
        setPreferences(prev => {return { ...prev, [attributeName]: value }})
    }

    useEffect(() => { 
        if(preferences.receiveNotifications === false)
        for( const attribute in preferences ) {
            if(attribute !== 'receiveNotifications')
                toggleSwitch(attribute, false);
        }
    }, [preferences.receiveNotifications])

    return (
        <View style={styles.container}>
            <View style={styles.configItem}>
                <Text style={styles.configLabel}>Habilitar notificações</Text>
                <View style={styles.switchArea}>
                    <Text style={[styles.switchOption, !preferences.receiveNotifications ? {...styles.chosen, color: '#FC2F47'} : {} ]}>Desabilitado</Text>
                        <Switch 
                            trackColor={{false: '#767577', true: '#5b92f2'}}
                            thumbColor={preferences.receiveNotifications ? '#4b64f2' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={(value) => toggleSwitch('receiveNotifications', value)}
                            value={preferences.receiveNotifications}
                        />
                    <Text style={[styles.switchOption, preferences.receiveNotifications ? {...styles.chosen, color: '#5b92f2'} : {} ]}>Habilitado</Text>
                </View>
            </View>
            <View style={[styles.configItem, !preferences.receiveNotifications ? { opacity: .5 } : {}]}>
                <Text style={styles.configLabel}>Receber apenas notificações de alertas na minha região</Text>
                <View style={styles.switchArea}>
                    <Text style={[styles.switchOption, !preferences.onlyOwnRegion ? {...styles.chosen, color: '#FC2F47'} : {} ]}>Desabilitado</Text>
                        <Switch 
                            trackColor={{false: '#767577', true: '#5b92f2'}}
                            thumbColor={preferences.onlyOwnRegion ? '#4b64f2' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={(value) => toggleSwitch('onlyOwnRegion', value)}
                            value={preferences.onlyOwnRegion}
                            disabled={!preferences.receiveNotifications}
                        />
                    <Text style={[styles.switchOption, preferences.onlyOwnRegion ? {...styles.chosen, color: '#5b92f2'} : {} ]}>Habilitado</Text>
                </View>
            </View>
        </View>
    );
}