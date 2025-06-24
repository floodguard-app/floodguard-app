import React, { useEffect, useRef, useState } from "react";
import { Alert, View } from "react-native";
import PagerView from "react-native-pager-view";
import EmailInput from "./EmailInput"; // Importe o componente
import PasswordInput from "./PasswordInput"; // Importe o componente
import { styles } from "./styles";
import { registerUser } from "../../services/user";

interface RegisterUserProps {
    navigation: any;
    route: {
        params: {
            onComplete: () => void;
        };
    };
}

export function RegisterUser({ navigation, route }: RegisterUserProps) {

    const { onComplete } = route.params;

    type newUserType = { userEmail: string, userPassword: string };
    const [newUser, setNewUser] = useState<newUserType>({ userEmail: "", userPassword: "" });

    const changeEmail = (email: string) => setNewUser((prev: newUserType) => ({ ...prev, userEmail: email }));
    const changePassword = (password: string) => setNewUser((prev: newUserType) => ({ ...prev, userPassword: password }));

    const handleRegisterUser = async () => {
        if(!newUser.userEmail || !newUser.userPassword) return Alert.alert("Necessário e-mail e senha para realizar cadastro!");
        const registeredUser = await registerUser(newUser.userEmail, newUser.userPassword);
        console.log('registeredUser: ', registeredUser);
        setNewUser({ userEmail: "", userPassword: "" })
        if(registeredUser) navToLogin();
        else Alert.alert("Erro ao realizar cadastro");
    }
    
    const navToLogin = () => {
        navigation.navigate('Login Screen');
    }

    return (
        <PagerView 
            style={styles.pagerView} 
            initialPage={0} 
            orientation="vertical" // Permite deslizar verticalmente
        >
            {/* Tela de Email */}
            <View key="1" style={styles.page}>
                <EmailInput navigation={navigation} email={newUser.userEmail} setEmail={changeEmail}/>
            </View>

            {/* Tela de Senha */}
            <View key="2" style={styles.page}>
                <PasswordInput navigation={navigation} password={newUser.userPassword} setPassword={changePassword} registerUser={handleRegisterUser} onComplete={onComplete}/>
            </View>
        </PagerView>
    );
}
