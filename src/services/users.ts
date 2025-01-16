import { getUserByEmail } from "../api/users";

import * as SecureStore from 'expo-secure-store';

export const saveUserId = async (userId: number) => {
    await SecureStore.setItemAsync('user_id', userId.toString());
};

export const getUserId = async () => {
    const userId = await SecureStore.getItemAsync('user_id');
    if(userId) return parseInt(userId);
};

export const deleteUserId = async () => {
    try {
        await SecureStore.deleteItemAsync('user_id');
        console.log('User ID deletado com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar o User ID:', error);
    }
};

export default async function loginUser(email: string, password: string) {
    const user = await getUserByEmail(email);

    if (!user) return false;    
    if( user.password != password ) return false;

    saveUserId(user.id);
    return true;
}