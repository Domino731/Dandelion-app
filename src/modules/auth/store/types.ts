import {ActionTypeUnion} from "../../../redux/constants.ts";

export type AuthSliceState = {
    isLogged: boolean;
    registerStatus: ActionTypeUnion;
    loginStatus: ActionTypeUnion;
}
