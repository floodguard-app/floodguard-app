import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
        paddingTop: 100,
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    emailInput: {
        backgroundColor: 'white',
        fontSize: 18,
        marginTop: 100,
        height: 60,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    passwordArea: {
        position: 'relative',
        marginTop: 100,
    },
    passwordInput: {
        backgroundColor: 'white',
        fontSize: 18,
        height: 60,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    showPasswordButton: {
        position: 'absolute',
        top: '50%',
        right: 15,
        width: 30,
        height: 30,
        transform: [
            { translateY: -15 }, // Ajusta para centralizar
        ],
    },
    hasRegister: {
        marginTop: 20,
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: '900',
    }
});