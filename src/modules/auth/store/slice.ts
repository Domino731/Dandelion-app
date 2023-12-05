// store/counterReducer.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthSliceState} from "./types.ts";
import {ActionTypeUnion} from "../../../redux/constants.ts";

const initialState: AuthSliceState = {
    isLogged: false,
    registerStatus: "IDLE",
    registerError: null,
    loginStatus: "IDLE"
};

export const AUTH_SLICE_NAME = 'auth';

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        // TODO: example action, remove later
        changeIsLogged: state => {
            state.isLogged = true;
        },
        setRegisterStatus: (state, action: PayloadAction<ActionTypeUnion>) => {
            state.registerStatus = action.payload;
        },
        setLoginStatus: (state, action: PayloadAction<ActionTypeUnion>) => {
            state.loginStatus = action.payload;
        },
        setRegisterError: (state, action: PayloadAction<string | null>) => {
            state.registerError = action.payload;
        }
    },
});

export const authSliceActions = authSlice.actions;
export const authReducer = authSlice.reducer;