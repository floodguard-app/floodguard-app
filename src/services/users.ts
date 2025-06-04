import { getUserByEmail, handleLogin } from "../api/users";
import { useAuth } from '../contexts/AuthContext';

import * as SecureStore from 'expo-secure-store';

export const saveUserId = async (user: any | null) => {
    if(user === null) return;
    await SecureStore.setItemAsync('user_id', user.id.toString());
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
    const response = await handleLogin(email, password);
    
    if (response) return false;
    
    const { user, setLoginData } = useAuth();
    setLoginData(response);

    saveUserId(user);
    return true;
}