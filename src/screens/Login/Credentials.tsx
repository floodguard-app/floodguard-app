import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import logo from '../../../assets/images/logo.png';
import emailIcon from '../../../assets/images/email.png';
import paasswordIcon from '../../../assets/images/password.png';
import { styles } from './styles';

interface CredentialScreenProps {
    setIsLoggedIn: (arg0: boolean) => void;
}

export function Credentials(
    // { setIsLoggedIn }: CredentialScreenProps 
    { navigation }: any
) {

    const navToHome = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Main Tabs',
                        state: {
                            routes: [{ name: 'Home Screen' }],
                        },
                    },
                ],
            })
        );
    };

    const navToRecoverPassword = () => {
        navigation.navigate('Recover Password Screen');
    }
    
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} />
            <View style={styles.credentialInputs}>
                <View style={styles.credentialField}>
                    <View style={styles.credentialIcon}>
                        <Image source={emailIcon} style={styles.inputIcon} />
                    </View>
                    <TextInput style={styles.credentialInput}
                        placeholder='E-mail'
                    />
                </View> 
                <View style={styles.credentialField}>
                    <View style={styles.credentialIcon}>
                        <Image source={paasswordIcon} style={styles.inputIcon} />
                    </View>
                    <TextInput style={styles.credentialInput}
                        placeholder='Senha'
                    />
                </View>
            </View>
            <View style={styles.loginButton} 
                onTouchEnd={
                    // () => setIsLoggedIn(true)
                    navToHome
                }
            >
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Entrar</Text>
            </View>
            <Text style={styles.forgotPassword}
                onPress={navToRecoverPassword}
            >Esqueci minha senha</Text>
        </View>
    );
}