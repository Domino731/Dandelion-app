import {API_CONFIG} from "./api.config.ts";
import axios from "axios";

export const api = axios.create(API_CONFIG);
export const authApi = axios.create(API_CONFIG);
export const setAuthApiToken = (accessToken: string) => {
    authApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}