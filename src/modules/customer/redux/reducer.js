import {createReducer, combineReducers} from '@reduxjs/toolkit';
import { customersLoadingAction, customersErrorAction, customersDoneAction } from './actions';
const isLoading = createReducer(false,builder => {
    builder.addCase(customersLoadingAction, () => true)
    .addCase(customersDoneAction, () => false)
    .addCase(customersErrorAction, () => false)
})

const error = createReducer(null,builder => {
    builder.addCase(customersErrorAction, (_,action) => action.payload);
})

const customers = createReducer([], builder => {
    builder.addCase(customersDoneAction, (_, action)=> action.payload);
})

export const reducer = combineReducers({
    isLoading,
    error,
    customers,
  });

/*
const counterReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload
})

*/