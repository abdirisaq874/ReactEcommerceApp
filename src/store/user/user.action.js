import { USER_ACTION_TYPES } from "./user.types";

export const CHECKUSERSESSION = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});

export const GoogleSignInStart = (user) => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  payload: user,
});

export const EmailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGNIN_START,
  payload: { email, password },
});

export const SignInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGNIN_SUCCESS,
  payload: user,
});
export const SignInFailed = (error) => {
  switch (error.code) {
    case "auth/wrong-password":
      alert("incorrect password");
      break;
    case "auth/user-not-found":
      alert("no user associated with this email");
      break;
    case "auth/email-already-in-use":
      alert("that email is in use");
      break;
    default:
      alert("user creation encountered an error", error);
      break;
  }
  return { type: USER_ACTION_TYPES.SIGNIN_FAILED, payload: error.code };
};

export const SignUpWithEmail = (email, password, displayName) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGNUP_START,
  payload: { email, password, displayName },
});

export const SignUpSuccess = (user, additionalInfo) => ({
  type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
  payload: { user, additionalInfo },
});

export const SignUPFailed = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      alert("that email is in use");
      break;
    default:
      alert("user creation encountered an error", error);
      break;
  }
  return { type: USER_ACTION_TYPES.SIGNUP_FAILED, payload: error.code };
};

export const SignOutStart =()=>{
    console.log("hello")
    return ({type:USER_ACTION_TYPES.SIGNOUT_START})}

export const SignOutSucess =()=>({type:USER_ACTION_TYPES.SIGNOUT_SUCCESS})

export const SignOutFailed =(error)=>({type:USER_ACTION_TYPES.SIGNOUT_FAILED,payload:error})