import {configureStore} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, authReducer} from "../modules/auth/store/slice.ts";
import {useDispatch} from "react-redux";
import {FRIENDS_REDUCER_NAME, friendsReducer} from "../modules/friends/store/slice.ts";
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        [AUTH_SLICE_NAME]: authReducer,
        [FRIENDS_REDUCER_NAME]: friendsReducer
    },
    // TODO: remove logger on dev environment
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;