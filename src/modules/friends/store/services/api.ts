import {authApi} from "../../../../api/api.ts";
import {API_URLS} from "../../../../api/api.const.ts";
import {apiProcess} from "./api.process.ts";

const getFriends = () => {
    return authApi.get(API_URLS.friends).then(res => apiProcess.getFriends(res.data));
}

export const friendsServices = {
    getFriends
}