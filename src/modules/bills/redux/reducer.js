import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { billsDoneAction, billsErrorAction, billsLoadingAction } from "./actions";

const isLoading = createReducer(false, builder => {
    builder.addCase(billsLoadingAction, ()=> true)
    .addCase(billsErrorAction, ()=> false)
    .addCase(billsDoneAction, ()=> false);
});

const error = createReducer('', builder => {
    builder.addCase(billsErrorAction, (state,action) => action.payload)
})

const list = createReducer([], builder => {
    builder.addCase(billsDoneAction, (state,action) => action.payload);
});




export const reducer = combineReducers({
    isLoading,
    error,
    list,
  });
