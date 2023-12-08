import {AppDispatch} from "../../../redux/store.ts";
import {authSliceActions} from "./slice.ts";
import {authServices} from "./services/api.ts";
import {LoginDto, RegisterDto} from "./services/api.types.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";
import {API_ERROR} from "../../../api.const.ts";
import {authApi, setAuthApiToken} from "../../../api/api.ts";

const register = (data: RegisterDto) => async (dispatch: AppDispatch) => {
    dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.PENDING));
    authServices.register(data).then((res) => {
        console.log(res);
        dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.SUCCESS));
    }).catch(error => {
        let errorMessage = API_ERROR
        if (error?.response?.status === 400 && error?.response?.data?.isVisible) {
            errorMessage = error.response.data.message;
        }
        dispatch(authSliceActions.setRegisterError(errorMessage));
        dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.ERROR));
    })
}

const login = (data: LoginDto) => async (dispatch: AppDispatch) => {
    dispatch(authSliceActions.setLoginStatus(ACTION_STATUS.PENDING));
    authServices.login(data).then((res) => {
        setAuthApiToken(res.accessToken);
        dispatch(authSliceActions.setUser(res));
        dispatch(authSliceActions.setLoginStatus(ACTION_STATUS.SUCCESS));
    }).catch(() => {
        // TODO: maybe more detail error?
        dispatch(authSliceActions.setLoginError("Wrong credentials"));
        dispatch(authSliceActions.setLoginStatus(ACTION_STATUS.ERROR));
    })
}

export const authActions = {register, login}