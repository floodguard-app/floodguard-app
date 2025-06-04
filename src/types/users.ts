export interface UserObject {
    id: number,
    email: string,
    nomeUsuario: string,
    idBairro?: string,
    password?: string,
    birthday?: string,
}

export interface UserLoginObject {
    token: string,
    usuario: {
        id: number, 
        email: string, 
        nomeUsuario: string
        idBairro?: string, 
    }
}