export type RegisterDto = {
    nick: string;
    password: string;
    email: string;
}

export type LoginDto = {
    email: string;
    password: string;
}
export type LoginResponse = {
    email: string;
    access_token: string;
}