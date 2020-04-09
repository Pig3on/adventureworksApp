import { createAction } from "@reduxjs/toolkit";

export const itemsLoading = createAction("ITEMS_LOADING");
export const itemsError = createAction("ITEMS_ERROR");
export const itemsDone = createAction('ITEMS_DONE');


export const removeItemAction = createAction('ITEM_REMOVE');


