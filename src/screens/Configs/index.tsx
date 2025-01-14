import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import personalInfoIcon from '../../../assets/images/personalInfo.png';
import alertConfigIcon from '../../../assets/images/bell.png';
import reportIcon from '../../../assets/images/report.png';
import talkToUsIcon from '../../../assets/images/talkToUs.png';

export function Configs({ navigation }: any) {

    const renderConfigItem = (icon:any, text:String, toPageName:String) => 
        <View style={styles.configItem} onTouchEnd={() => navigation.navigate(toPageName)}>
            <View style={styles.configIconContainer}>
                <Image source={icon} style={styles.configIcon} resizeMode='contain' />
            </View>
            <Text style={styles.configText}>{text}</Text>
        </View>

    return (
        <View style={styles.container}>
            { renderConfigItem( personalInfoIcon, "Informação Pessoal", 'personalInfoIcon' )}
            <View style={styles.divider} />
            { renderConfigItem( alertConfigIcon, "Configurar Alertas", '') }
            <View style={styles.divider} />
            { renderConfigItem( reportIcon, "Denunciar Abuso", '')}
            <View style={styles.divider} />
            { renderConfigItem(talkToUsIcon, "Fale Conosco", '') }
            <Text style={styles.endSession}>Encerrar Sessão</Text>
        </View>
    );
}