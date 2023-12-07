// store/counterReducer.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthSliceState, User} from "./types.ts";
import {ActionTypeUnion} from "../../../redux/constants.ts";

const initialState: AuthSliceState = {
    isLogged: false,
    registerStatus: "IDLE",
    registerError: null,
    loginStatus: "IDLE",
    loginError: null,
    user: null
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
        setRegisterError: (state, action: PayloadAction<string | null>) => {
            state.registerError = action.payload;
        },
        setLoginStatus: (state, action: PayloadAction<ActionTypeUnion>) => {
            state.loginStatus = action.payload;
        },
        setLoginError: (state, action: PayloadAction<string | null>) => {
            state.loginError = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        }
    },
});

export const authSliceActions = authSlice.actions;
export const authReducer = authSlice.reducer;