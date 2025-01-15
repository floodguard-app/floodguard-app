import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";

interface PasswordInputProps {
    navigation: any,
    onComplete: () => void,
}

export default function PasswordInput({ navigation, onComplete }: PasswordInputProps) {

    const [userPassword, setUserPassword] = useState<string>('')
    const [isSecure, setIsSecure] = useState(true);

    const navToLogin = () => {
        navigation.navigate('Login Screen');
    }

    return (
        <LinearGradient colors={['#5E9FF2', '#4B64F2', '#5079F2', '#66B1F2']} style={styles.container}>
            <Text style={styles.title}>{'Digite \nsua \nSenha'}</Text>
            <View style={styles.passwordArea}>
                <TextInput style={styles.passwordInput}
                    keyboardType="default"
                    autoCapitalize="none"
                    value={userPassword}
                    onChangeText={setUserPassword}
                    secureTextEntry={isSecure}
                />
                <Text style={styles.showPasswordButton}
                    onPress={() => setIsSecure(!isSecure)}
                >{isSecure ? 
                    <Ionicons name="eye-outline" size={30} color='#5079F2'/> : 
                    <Ionicons name="eye-off-outline" size={30} color='#5079F2'/>}
                </Text>
            </View>
            <Text style={styles.hasRegister}
                onPress={navToLogin}
            >Já tenho um cadastro</Text>
        </LinearGradient>
    )
}