import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F8'
    },
    logoImage: {
        width: '75%',
        marginHorizontal: 'auto',
        marginTop: 50,
    },
    credentialInputs: {
        marginTop: 80,
        gap: 10,
        paddingHorizontal: 30
    },
    credentialField: {
        height: 60,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        borderRadius: 5
    },
    credentialInput: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    credentialIcon: {
        backgroundColor: '#fff',
        position: 'relative',
        height: '100%',
        aspectRatio: 1/1
    },
    inputIcon: {
        position: 'relative',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '40%',
        aspectRatio: 1/1,
        // backgroundColor: 'red'
    },
    loginButton: {
        backgroundColor: '#6874e8',
        marginHorizontal: 30,
        marginTop: 25,
        width: windowWidth - 60,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    forgotPassword: {
        textAlign: 'right',
        marginRight: 30,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: '#6874E8',
    },
    recoverPasswordContainter: {
        backgroundColor: '#f6f7f8',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '15%',
    },
    recoverPasswordImage: {
        width: '80%',
        maxHeight: '45%',
    },
    recoverPasswordField: {
        marginHorizontal: '10%'
    },
    recoverPasswordButton: {
        backgroundColor: '#6874e8',
        marginTop: 25,
        width: '80%',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
});