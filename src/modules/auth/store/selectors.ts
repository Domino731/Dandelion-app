import {RootState} from "../../../redux/store.ts";
import {AUTH_SLICE_NAME} from "./slice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[AUTH_SLICE_NAME];

const isLogged = createSelector(root, (state) => state.isLogged);
const signUpIsLoading = createSelector(root, state => state.signUpIsLoading);
const signUpErrorText = createSelector(root, state => state.signUpErrorText);

export const authSelectors = {isLogged, signUpErrorText, signUpIsLoading};