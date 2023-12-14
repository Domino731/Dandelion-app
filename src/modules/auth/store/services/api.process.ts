import {LoginResponse} from "./api.types.ts";

export const login = (data: LoginResponse) => {
    return {
        email: data.email,
        accessToken: data.access_token
    }
}

export const apiProcess = {
    login
}