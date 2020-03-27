import {createAction} from "@reduxjs/toolkit";

export const customersLoadingAction = createAction("CUSTOMERS_LOADING");
export const customersDoneAction = createAction("CUSTOMERS_DONE");
export const customersErrorAction = createAction("CUSTOMETS_ERROR");



