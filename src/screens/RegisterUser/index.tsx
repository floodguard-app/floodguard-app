import React, { useRef } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import EmailInput from "./EmailInput"; // Importe o componente
import PasswordInput from "./PasswordInput"; // Importe o componente
import { styles } from "./styles";

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
    
    return (
        <PagerView 
            style={styles.pagerView} 
            initialPage={0} 
            orientation="vertical" // Permite deslizar verticalmente
        >
            {/* Tela de Email */}
            <View key="1" style={styles.page}>
                <EmailInput navigation={navigation}/>
            </View>

            {/* Tela de Senha */}
            <View key="2" style={styles.page}>
                <PasswordInput navigation={navigation} onComplete={onComplete}/>
            </View>
        </PagerView>
    );
}
