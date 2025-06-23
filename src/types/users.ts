export interface UserObject {
    id: number,
    email: string,
    nomeUsuario: string,
    idBairro?: string,
    password?: string,
    birthday?: string,
    dataRegistro?: string
}

export interface UserLoginObject {
    token: string,
    usuario: UserObject
}