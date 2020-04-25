import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { registerDone, registerLoading, registerError, logout, loginError, loginLoading, loginDone } from "./actions";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
const currentLoggedUser = createReducer(null, builder => {
    builder.addCase(registerDone,(_,action)=> action.payload)
    .addCase(logout,()=> null)
    .addCase(loginDone,(_, action)=> action.payload);
})

const isLoading = createReducer(false, builder => {
    builder.addCase(registerLoading, ()=> true)
    .addCase(registerDone,()=> false)
    .addCase(registerError, ()=> false)
    .addCase(loginLoading, ()=> true)
    .addCase(loginError, ()=> false)
    .addCase(loginDone, ()=> false);
})

const error = createReducer(null, builder => {
    builder.addCase(registerError,(_,action)=> action.payload )
    .addCase(loginError, (_, action)=> action.payload);
})

export const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['currentLoggedUser']
};


export const reducer = persistReducer(persistConfig, combineReducers({currentLoggedUser,isLoading,error}));
