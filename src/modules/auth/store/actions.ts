import {AppDispatch} from "../../../redux/store.ts";
import {authSliceActions} from "./slice.ts";
import {authServices} from "./services/api.ts";
import {RegisterDto} from "./services/api.types.ts";
import {ACTION_STATUS} from "../../../redux/constants.ts";

const register = (data: RegisterDto) => async (dispatch: AppDispatch) => {
    dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.PENDING));
    authServices.register(data).then(() => {
        dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.SUCCESS));
    }).catch(error => {
        if (error.response.status === 400 && error.response.data.isVisible) {
            dispatch(authSliceActions.setRegisterError(error.response.data.message))
        }
        dispatch(authSliceActions.setRegisterStatus(ACTION_STATUS.ERROR));
    })

}

export const authActions = {register}