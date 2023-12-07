import {LoginDto, RegisterDto} from "./api.types.ts";
import {api} from "../../../../api";
import {API_URLS} from "../../../../api/api.const.ts";
import {apiProcess} from "./api.process.ts";

const register = (data: RegisterDto) => {
    return api.post(API_URLS.authRegister, data);
}

const login = (data: LoginDto) => {
    return api.post(API_URLS.authLogin, data)
        .then(res => apiProcess.login(res.data));
}

export const authServices = {
    register,
    login
}