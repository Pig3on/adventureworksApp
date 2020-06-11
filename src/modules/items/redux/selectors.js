export const getBillItems = state => state.items.items;
export const areBillItemsLoading = state => state.items.isLoading;
export const billItemsError = state => state.items.error;

export const getTotalPrice = state => state.items.items.reduce((acc, curr) => acc + parseFloat(curr.TotalPrice), 0).toFixed(2);


export const isFormLoadingSelector = state => state.items.formLoading;