export interface FloodAlertObject {
    id: number,
    riskMessage: String,
    regions: Array<String>,
    warning?: {
        message: String,
        details: String,
        link: String,
    },
}

export interface CommentObject {
    id: number,
    sender: string,
    datetime: string,
    message: string,
}

export interface UserObject {
    id: number,
    name: string,
    username: string,
    password?: string,
    birthday: string,
    email: string,
    region: string,
}