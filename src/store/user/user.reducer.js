import { USER_ACTION_TYPES } from "./user.types";

const Initial_states = {
  CurrentUser: null,
  isLoading: false,
  error: null,
};

export const UserReducer = (state = Initial_states, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGNOUT_START:
    case USER_ACTION_TYPES.EMAIL_SIGNIN_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.EMAIL_SIGNUP_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return { ...state, isLoading: false, CurrentUser: payload, error: null };
    case USER_ACTION_TYPES.SIGNOUT_SUCCESS:
      return { ...state, CurrentUser: null, error: null, isLoading: false };
    case USER_ACTION_TYPES.SIGNUP_SUCCESS:
      const { user } = payload;
      return { ...state, isLoading: false, CurrentUser: user, error: null };
    case USER_ACTION_TYPES.SIGNIN_FAILED:
    case USER_ACTION_TYPES.SIGNUP_FAILED:
    case USER_ACTION_TYPES.SIGNOUT_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
