import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import profileIcon from '../../../assets/images/profile.png';
import configIcon from '../../../assets/images/config.png'; 

export function HeaderButtons({ navigation }: any) {

    const navToConfig = () => {
        navigation.navigate('Configurations Screen')
    }
    
    return (
        <View style={styles.container}>
            <View style={[styles.profile, styles.button]}>
                <Image source={profileIcon} 
                    style={[styles.buttonIcon ]}
                />
            </View>
            <View style={[styles.config, styles.button]} 
                onTouchEnd={navToConfig}
            >
                <Image source={configIcon}
                    style={[styles.buttonIcon]} 
                />
            </View>
        </View>
    );
}