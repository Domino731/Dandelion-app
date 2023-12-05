import {RootState} from "../../../redux/store.ts";
import {AUTH_SLICE_NAME} from "./slice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[AUTH_SLICE_NAME];

const isLogged = createSelector(root, (state) => state.isLogged);
const registerStatus = createSelector(root, (state) => state.registerStatus);
const loginStatus = createSelector(root, (state) => state.loginStatus);

export const authSelectors = {isLogged, registerStatus, loginStatus};