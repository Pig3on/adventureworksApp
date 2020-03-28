import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { accoutsLoadingAction, accountsErrorAction, accountsDoneAction } from "./actions";

const isLoading = createReducer(false, builder => {
    builder.addCase(accoutsLoadingAction, ()=> true)
    .addCase(accountsErrorAction, ()=> false)
    .addCase(accountsDoneAction, ()=> false);
});

const error = createReducer('', builder => {
    builder.addCase(accountsErrorAction, (state,action) => action.payload)
})

const list = createReducer([], builder => {
    builder.addCase(accountsDoneAction, (state,action) => action.payload);
});




export const reducer = combineReducers({
    isLoading,
    error,
    list,
  });
