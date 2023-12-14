import {ActionTypeUnion} from "../../../redux/constants.ts";

export type AuthSliceState = {
    isLogged: boolean;
    registerStatus: ActionTypeUnion;
    registerError: string | null;
    loginStatus: ActionTypeUnion;
    loginError: string | null;
    user: User | null;
}

export type User = {
    email: string;
    accessToken: string;
}