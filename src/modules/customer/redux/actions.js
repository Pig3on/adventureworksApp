import { createAction } from "@reduxjs/toolkit";

export const customersLoadingAction = createAction("CUSTOMERS_LOADING");
export const customersDoneAction = createAction("CUSTOMERS_DONE");
export const customersErrorAction = createAction("CUSTOMETS_ERROR");

export const setSelectedCustomer = createAction("SELECT_CUSTOMER");



export const setSearchTerm = createAction("SET_SEARCH_TERM");

