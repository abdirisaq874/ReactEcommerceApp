import { USER_ACTION_TYPES } from "./user.types";

const Initial_states = {
  CurrentUser: null,
};

export const UserReducer = (state = Initial_states, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, CurrentUser: payload };
    default:
        return state
  }
};
