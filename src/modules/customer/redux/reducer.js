import {createReducer, combineReducers} from '@reduxjs/toolkit';
import { customersLoadingAction, customersErrorAction, customersDoneAction, setSelectedCustomer, setSearchTerm } from './actions';

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

const selectedCustomer = createReducer(null, builder => {
  builder.addCase(setSelectedCustomer, (_,action)=> action.payload)
})
const currentSearchTerm = createReducer(null,builder => {
  builder.addCase(setSearchTerm, (_,action) => action.payload)
}) 
export const reducer = combineReducers({
    isLoading,
    error,
    customers,
    selectedCustomer,
    currentSearchTerm,
  });




/*
const counterReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload
})

*/