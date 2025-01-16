import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        gap: 25,
        paddingTop: '20%',
        paddingHorizontal: '10%',
    },
    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        
    },
    infoLabel: {
        maxWidth: '40%',
        fontWeight: '500',
        fontSize: 20,
    },
    infoData: {
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#333',
        alignSelf: 'flex-end',
    }
});