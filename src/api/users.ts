import axios from "axios";
import users from "../data/users.json";
import { UserObject } from "../types/api";
import { UserLoginObject } from "../types/users";

export async function getUserById(id: number): Promise<UserObject | undefined> {
    try {
        // AQUI SERÁ FEITA A BUSCA DOS DADOS NA API

        const user = users.find(user => user.id === id);
        return user;
    } catch (error) {
        console.error(error);
        return;
    }
}

export async function getUserByEmail(email: string): Promise<UserObject | undefined> {
    try {
        // AQUI SERÁ FEITA A BUSCA DOS DADOS NA API

        const user = users.find(user => user.email === email);
        return user; // Trata o caso de `undefined`
    } catch (error) {
        console.error(error);
        return;
    }
}

export async function handleLogin(email: string, password: string): Promise<UserLoginObject | undefined> {
    try {
        const loginUser = (await axios.post('http://10.0.2.2:1570/api/usuarios/login', {email, password})).data;
        return loginUser;
        
    } catch (error) {
        console.error(error);
        return;
    }
}