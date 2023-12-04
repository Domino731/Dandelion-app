import {AppDispatch} from "../../../redux/store.ts";
import {authSliceActions} from "./slice.ts";

const signUp = () => (dispatch: AppDispatch) => {
    dispatch(authSliceActions.changeChangeUpIsLoading(true));
}

export const authActions = {signUp}