import { createAction } from "@reduxjs/toolkit";

export const accoutsLoadingAction = createAction("ACCOUNTS_LOADING");
export const accountsErrorAction = createAction("ACCOUNTS_ERROR");
export const accountsDoneAction = createAction("ACCOUNTS_DONE");