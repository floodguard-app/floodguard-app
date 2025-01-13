import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        marginBottom: 50,
        gap: 20
    },
    divisionBar: {
        height: 1,
        borderColor: 'black',
        borderWidth: .5,
    },
    message: {
        position: 'relative',
        width: screenWidth - 100,
    },
    datetime: {
        textAlign: 'center'
    }
});