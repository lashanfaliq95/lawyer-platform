import { takeLatest, put, select } from 'redux-saga/effects';
import {
  loginUserService,
  forgotPasswordService,
  registerUserService,
  resetTokenService,
  resetPasswordService,
  logoutUserService,
  deleteUserService,
} from 'services/authService';
import {
  setUserDetails,
  getAccessToken,
  clearStorage,
} from 'helpers/localStorageHelper';
import { setAccessTokenToRequest } from 'helpers/apiHelper';

import {
  forgotPasswordSuccess,
  loginUserSuccess,
  loginUserError,
  setUserIdFromResetToken,
  registerUserSuccess,
  registerUserError,
  logoutUserSuccess,
  logoutUserError,
} from './actions';
import {
  LOGIN_USER,
  FORGOT_PASSWORD,
  REGISTER_USER,
  DELETE_USER,
  GET_USER_ID_FROM_TOKEN,
  RESET_PASSWORD,
  LOGOUT_USER,
} from './constants';

const getUserId = (state) => state.login.userDetails && state.login.userDetails.id;

function* loginUser(action) {
  const response = yield loginUserService(action.payload);
  const { result, error } = response || {};
  if (result) {
    setUserDetails(result);
    yield put(loginUserSuccess(result));
    setAccessTokenToRequest(result.accessToken);
  } else {
    yield put(loginUserError(error));
  }
}

function* forgotPassword(action) {
  const { result } = yield forgotPasswordService(action.payload);
  if (result && result.data) {
    yield put(forgotPasswordSuccess());
  }
}

function* registerUser(action) {
  const response = yield registerUserService(action.payload);
  const { result, error } = response || {};
  if (result) {
    yield put(registerUserSuccess());
  } else {
    yield put(registerUserError(error));
  }
}

function* getIdFromToken(action) {
  const response = yield resetTokenService(action.payload);
  const { result, error } = response || {};
  if (result && result.id) {
    yield put(setUserIdFromResetToken(result));
  } else {
    yield put(setUserIdFromResetToken({ error }));
  }
}

function* resetPassword(action) {
  const response = yield resetPasswordService(action.payload);
  const { result, error } = response || {};
  if (result && result.id) {
    yield put(setUserIdFromResetToken(result));
  } else {
    yield put(setUserIdFromResetToken({ error }));
  }
}

function* logoutUser() {
  const response = yield logoutUserService(getAccessToken());
  const { result, error } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield put(logoutUserError(error));
  }
}

function* deleteUser() {
  const useId = yield select(getUserId);
  const response = yield deleteUserService(useId);
  const { result, error } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield put(logoutUserError(error));
  }
}

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(DELETE_USER, deleteUser),
  takeLatest(FORGOT_PASSWORD, forgotPassword),
  takeLatest(GET_USER_ID_FROM_TOKEN, getIdFromToken),
  takeLatest(RESET_PASSWORD, resetPassword),
  takeLatest(LOGOUT_USER, logoutUser),
];
