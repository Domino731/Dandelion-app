import {AppDispatch} from "../../../redux/store.ts";
import {authSliceActions} from "./slice.ts";
import {authServices} from "./services/api.ts";
import {RegisterDto} from "./services/api.types.ts";

const register = (data: RegisterDto) => async (dispatch: AppDispatch) => {
    dispatch(authSliceActions.changeChangeUpIsLoading(true));
    const response = authServices.register(data);
    console.log(response);
    dispatch(authSliceActions.changeChangeUpIsLoading(false));
}

export const authActions = {register}