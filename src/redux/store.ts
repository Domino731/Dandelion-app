// store/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {AUTH_SLICE_NAME, authReducer} from "./auth/slice.ts";
// Import your reducers here
// import counterReducer from './counterReducer';

const store = configureStore({
    reducer: {
        [AUTH_SLICE_NAME]: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;