import React from 'react';
import { Image, View, TextInput, Text } from 'react-native';
import { styles } from './styles';
import recoverPasswordImage from '../../../assets/images/authentication.png';
import recoverEmail from '../../../assets/images/recoverEmail.png';

export function RecoverPassword({ navigation }:any) {

    const navToLogin = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.recoverPasswordContainter}>
            <Image style={styles.recoverPasswordImage} source={recoverPasswordImage}
                resizeMode='contain'
            />
            <View style={[styles.credentialField, styles.recoverPasswordField]}>
                <View style={styles.credentialIcon}>
                    <Image source={recoverEmail} style={styles.inputIcon} 
                        resizeMode='contain'
                    />
                </View>
                <TextInput style={styles.credentialInput}
                    placeholder='E-mail'
                />
            </View> 
            <View style={styles.recoverPasswordButton} 
                onTouchEnd={navToLogin}
            >
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Enviar e-mail de recuperação</Text>
            </View>
        </View>
    );
}