// store/counterReducer.ts
import {createSlice} from '@reduxjs/toolkit';
import {AuthSliceState} from "./types.ts";

const initialState: AuthSliceState = {
    isLogged: false
};

export const AUTH_SLICE_NAME = 'auth';

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        // TODO: example action, remove later
        changeIsLogged: state => {
            state.isLogged = true;
        }
    },
});

export const {changeIsLogged} = authSlice.actions;
export const authReducer = authSlice.reducer;