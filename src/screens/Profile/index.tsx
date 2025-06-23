import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { UserObject } from '../../types/users';
import { getAuthUser } from '../../services/users';
import writeIcon from '../../../assets/images/write.png';

export function Profile() {

    const [userData, setUserData] = useState<UserObject | undefined>();
    const [editingField, setEditingField] = useState<{field: string, value: string} | null>(null);

    useEffect(() => {
        const getData = async () => {
            const user = await getAuthUser();
            if(user) setUserData(user);
        }
        getData();
    }, []);

    const onEditChange = (text: string) => setEditingField((prev: {field: string, value: string} | null) => prev ? ({...prev, value: text}) : null)

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Nome de usuário: </Text>
                { editingField?.field == "username" ? 
                     <TextInput style={styles.editInput}
                        placeholder='E-mail' autoCapitalize='none'
                        value={editingField.value} onChangeText={onEditChange}
                    />
                : (<>
                    <Text style={styles.infoData}>{userData?.nomeUsuario}</Text>
                    <TouchableOpacity style={styles.editTouch} 
                        onPress={() => setEditingField({field: "username", value: userData?.nomeUsuario || ""})}
                    >
                        <Image source={writeIcon} style={styles.editIcon} /> 
                    </TouchableOpacity>
                </>) }
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>E-mail: </Text>
                <Text style={styles.infoData} numberOfLines={1}>{userData?.email}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoLabel}>Região: </Text>
                { editingField?.field == "region" ? 
                    <Text>Aqui</Text>
                : (<>
                    <Text style={styles.infoData}>{userData?.idBairro}</Text>
                    <TouchableOpacity style={styles.editTouch} 
                        onPress={() => setEditingField({field: "region", value: userData?.idBairro || ""})}
                    >
                        <Image source={writeIcon} style={styles.editIcon} /> 
                    </TouchableOpacity>
                </>) }
            </View>
            {/* <View style={styles.info}>
                <Text style={styles.infoLabel}>Data de cadastro: </Text>
                <Text style={styles.infoData}>{userData?.dataRegistro}</Text>
            </View> */}
        </View>
    );
}