import {RootState} from "../store.ts";
import {AUTH_SLICE_NAME} from "./slice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (state: RootState) => state[AUTH_SLICE_NAME];

const isLogged = createSelector(root, (state) => state.isLogged);

export const authSelectors = {isLogged};