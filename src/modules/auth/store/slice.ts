// store/counterReducer.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthSliceState} from "./types.ts";

const initialState: AuthSliceState = {
    isLogged: false,
    signUpErrorText: null,
    signUpIsLoading: false
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
        changeChangeUpIsLoading: (state, action: PayloadAction<boolean>) => {
            state.signUpIsLoading = action.payload;
        },
        changeChangeUpErrorText: (state, action: PayloadAction<string | null>) => {
            state.signUpErrorText = action.payload;
        }
    },
});

export const authSliceActions = authSlice.actions;
export const authReducer = authSlice.reducer;