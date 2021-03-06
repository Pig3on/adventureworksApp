import { createAction } from "@reduxjs/toolkit";

export const registerLoading = createAction("REGISTER_LOADING");
export const registerDone = createAction("REGISTER_DONE");
export const registerError = createAction("REGISTER_ERROR");


export const loginLoading = createAction("LOGIN_LOADING");
export const loginDone = createAction("LOGIN_DONE");
export const loginError = createAction("LOGIN_ERROR");


export const updateLoading = createAction("UPDATE_LOADING");
export const updateDone = createAction("UPDATE_DONE");
export const updateError = createAction("UPDATE_ERROR");

export const logout = createAction("LOGOUT");