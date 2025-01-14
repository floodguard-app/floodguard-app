import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
        width: '100%',
        borderRadius: 10,
        marginBottom: 25,
        padding: 20,
        gap: 20,
    },
    divisionBar: {
        height: 1,
        borderColor: 'black',
        borderTopWidth: .5,
    },
    message: {
        position: 'relative',
        width: screenWidth - 100,
        fontSize: 16,
        color: "#333",
    },
    datetime: {
        textAlign: 'center',
        color: "#333",
        fontSize: 15,
    }
});