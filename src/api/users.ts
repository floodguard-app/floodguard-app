import axios from "axios";
import api from "./axiosInstance";
import { UserObject, UserLoginObject } from "../types/users";

export async function handleRegister(email: string, password: string): Promise<UserLoginObject | undefined> {
    try {
        const registeredUser = (await axios.post('http://10.0.2.2:1570/api/usuarios/comum/cadastro', {email, password})).data;
        return registeredUser;
    }
    catch (error) {
        console.error(error);
        return;
    }
}

export async function handleLogin(email: string, password: string): Promise<UserLoginObject | undefined> {
    try {
        const response = (await axios.post('http://10.0.2.2:1570/api/usuarios/login', {email, password})).data;
        return response;
    } catch (error) {
        console.error("Erro na requisição de login:", error);
        throw error;
    }
}

export async function updateUsername(newUsername: string): Promise<UserObject | undefined> {
    try {
        const response = (await api.patch('/usuarios/nomeUsuario', newUsername)).data;
        return response;
    } catch (error) {
        console.error("Erro ao atualizar nome de usuário:", error);
        throw error;
    }
}