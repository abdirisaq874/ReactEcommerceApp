import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.CurrentUser
);

export const isLoading = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);
