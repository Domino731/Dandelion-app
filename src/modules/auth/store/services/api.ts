import {RegisterDto} from "./api.types.ts";
import {api} from "../../../../api";
import {API_URLS} from "../../../../api/api.const.ts";

const register = (data: RegisterDto) => {
    return api.post(API_URLS.authRegister, data);
}

export const authServices = {
    register
}