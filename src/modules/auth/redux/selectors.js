export const getCurrentUserSelector = (state) => state.auth.currentLoggedUser;
export const getUserTokenSelector = (state) => state.auth.currentLoggedUser.token;