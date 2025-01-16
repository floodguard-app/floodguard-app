import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { UserObject } from '../../types/api';
import { getUserById } from '../../api/users';
import { getUserId } from '../../services/users';

export function Profile() {

    const [userData, setUserData] = useState<UserObject | undefined>();

    useEffect(() => {
        const getData = async () => {
            const userId = await getUserId();

            if(userId) {
                const data = await getUserById(userId);
                setUserData(data);
            }
        }
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Nome: </Text>
                <Text style={styles.infoData}>{userData?.name}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Apelido: </Text>
                <Text style={styles.infoData}>{userData?.username}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Data de Nascimento: </Text>
                <Text style={styles.infoData}>{userData?.birthday}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>E-mail: </Text>
                <Text style={styles.infoData} numberOfLines={1}>{userData?.email}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Região: </Text>
                <Text style={styles.infoData}>{userData?.region}</Text>
            </View>
        </View>
    );
}