import { LinearGradient } from "expo-linear-gradient";
import { Button, Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";

interface PasswordInputProps {
    onComplete: () => void,
}

export default function PasswordInput({ onComplete }: PasswordInputProps) {

    const [userPassword, setUserPassword] = useState<string>('')
    const [isSecure, setIsSecure] = useState(true);

    return (
        <LinearGradient colors={['#66B1F2', '#4B64F2', '#5079F2', '#5E9FF2']} style={styles.container}>
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
            <Text style={styles.hasRegister}>Já tenho um cadastro</Text>
        </LinearGradient>
    )
}