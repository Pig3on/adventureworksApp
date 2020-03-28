import { createAction } from "@reduxjs/toolkit";

export const billsLoadingAction = createAction("ACCOUNTS_LOADING");
export const billsErrorAction = createAction("ACCOUNTS_ERROR");
export const billsDoneAction = createAction("ACCOUNTS_DONE");