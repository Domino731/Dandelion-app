import {RootState} from "../../../redux/store.ts";
import {AUTH_SLICE_NAME} from "./slice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[AUTH_SLICE_NAME];

const isLogged = createSelector(root, (state) => Boolean(state.user));
const registerStatus = createSelector(root, (state) => state.registerStatus);
const registerError = createSelector(root, (state) => state.registerError);
const loginStatus = createSelector(root, (state) => state.loginStatus);
const loginError = createSelector(root, (state) => state.loginError);
const user = createSelector(root, (state) => state.user);
const accessToken = createSelector(root, (state) => state.acce);

export const authSelectors = {isLogged, registerStatus, loginStatus, registerError, loginError, user};