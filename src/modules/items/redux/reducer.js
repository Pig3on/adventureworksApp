import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { itemsLoading, itemsError, itemsDone } from "./actions";

const isLoading = createReducer(false, builder => {
    builder.addCase(itemsLoading, () => true)
    .addCase(itemsError, ()=> false)
    .addCase(itemsDone, ()=> false);
})

const error = createReducer('', builder => {
    builder.addCase(itemsError, (state,action)=> action.payload)
})

const items = createReducer([''], builder => {
    builder.addCase(itemsDone,(state,action)=> action.payload)
})



export const reducer = combineReducers({isLoading,error,items})