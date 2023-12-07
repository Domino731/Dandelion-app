import {LoginResponse} from "./api.types.ts";

export const login = (data: LoginResponse) => {
    return {
        email: data.email,
        password: data.password,
        refreshToken: data.refreshToken,
        accessToken: data.accessToken
    }
}

export const apiProcess = {
    login
}