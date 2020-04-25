export const getCurrentUserSelector = (state) => state.auth.currentLoggedUser;
export const getUserTokenSelector = (state) => state.auth.currentLoggedUser.token;

export const isLoadingSelector = (state) => state.auth.isLoading;

export const errorSelector = (state) => state.auth.error;