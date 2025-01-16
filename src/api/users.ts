import users from "../data/users.json";
import { UserObject } from "../types/api";

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
