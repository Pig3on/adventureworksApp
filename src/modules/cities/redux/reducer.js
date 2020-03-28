import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { citiesLoaded } from "./actions";

const cities = createReducer([], builder => {
    builder.addCase(citiesLoaded,(state,action)=> action.payload)
} )


export const reducer = combineReducers({
    cities
});