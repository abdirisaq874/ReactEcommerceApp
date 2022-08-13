import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  createUserDocumentFromAuth,
  createUserWithEmailAndpassword,
  getCurrentUser,
  SignInAuthWithEmailandPassword,
  signInWithGooglePopup,
  SignOutApp,
} from "../../utils/firebase/firebase.utils";
import {
  SignInFailed,
  SignInSuccess,
  SignOutFailed,
  SignOutSucess,
  SignUPFailed,
  SignUpSuccess,
} from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* getSnapshotFromUserAuth(UserAuth, additionalInfo) {
  try {
    const UserSnapshot = yield call(
      createUserDocumentFromAuth,
      UserAuth,
      additionalInfo
    );
    yield put(SignInSuccess({ id: UserSnapshot.id, ...UserSnapshot.data() }));
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* IsUserAuthenticated() {
  try {
    const UserAuth = yield call(getCurrentUser);
    if (!UserAuth) return;
    yield call(getSnapshotFromUserAuth, UserAuth);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* SignInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    if (!user) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* SignInWithEmail({ payload }) {
  const { email, password } = payload;
  try {
    const { user } = yield call(
      SignInAuthWithEmailandPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* SignUpWithEmail({ payload }) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield call(
      createUserWithEmailAndpassword,
      email,
      password
    );
    yield put(SignUpSuccess(user,  {displayName}));
  } catch (error) {
    yield put(SignUPFailed(error));
  }
}



export function* SignInAfterSignUp({payload:{user,additionalInfo}}) {
  yield call(getSnapshotFromUserAuth,user,additionalInfo)
}


export function* SignOut(){
  try {
    yield call(SignOutApp)
    yield put(SignOutSucess())
  } catch (error) {
    yield put(SignOutFailed(error))
  }
}


export function* SignupSucess() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, SignInAfterSignUp);
}

export function* OnUserGoogleLogIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, SignInWithGoogle);
}
export function* OnUserEmaillogIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, SignInWithEmail);
}
export function* OnUserEmailSignUp() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNUP_START, SignUpWithEmail);
}

export function* chechSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, IsUserAuthenticated);
}

export function* OnSignOut(){
  yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START,SignOut)
}

export function* UserSaga() {
  yield all([
    call(chechSession),
    call(OnUserGoogleLogIn),
    call(OnUserEmaillogIn),
    call(OnUserEmailSignUp),
    call(SignupSucess),
    call(OnSignOut)
  ]);
}
