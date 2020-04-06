import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { registerDone, registerLoading, registerError } from "./actions";

const currentLoggedUser = createReducer(null, builder => {
    builder.addCase(registerDone,(_,action)=> action.payload)
})

const isLoading = createReducer(false, builder => {
    builder.addCase(registerLoading, ()=> true)
    .addCase(registerDone,()=> false)
    .addCase(registerError, ()=> false);
})

const error = createReducer(null, builder => {
    builder.addCase(registerError,(_,action)=> action.payload )
})


export const reducer = combineReducers({currentLoggedUser,isLoading,error});
