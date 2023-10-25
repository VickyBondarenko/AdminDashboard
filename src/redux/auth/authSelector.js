export const selectIsAuth = (state) => Boolean(state.auth.token);
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserId = (state) => {
  const { _id } = state.auth.user;
  if (_id) {
    return _id;
  }
};
export const getToken = (state) => state.auth.token;
export const getIsRefreshing = (state) => state.auth.isRefreshing;
export const getIsLoading = (state) => state.auth.isLoading;
