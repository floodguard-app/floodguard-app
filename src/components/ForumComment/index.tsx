import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import formatDatetimeToTimeAgo from '../../utils/formatDatetimeToTimeAgo';

export function ForumComment({ commentData }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.divisionBar}></View>
            <Text style={styles.message}>{commentData.message}</Text>
            <Text style={styles.datetime}>{
                formatDatetimeToTimeAgo(commentData.datetime)
            }</Text>
            <View style={styles.divisionBar}></View>
        </View>
    );
}