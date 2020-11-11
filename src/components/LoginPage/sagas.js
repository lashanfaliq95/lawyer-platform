import { takeLatest, put } from 'redux-saga/effects';
import {
  loginUserService,
  forgotPasswordService,
  registerUserService,
  resetTokenService,
  resetPasswordService,
} from 'services/authService';
import { setUserDetails } from 'helpers/localStorageHelper';
import { setAccessTokenToRequest } from 'helpers/apiHelper';

import {
  forgotPasswordSuccess,
  loginUserSuccess,
  loginUserError,
  setUserIdFromResetToken,
} from './actions';
import {
  LOGIN_USER,
  FORGOT_PASSWORD,
  REGISTER_USER,
  GET_USER_ID_FROM_TOKEN,
  RESET_PASSWORD,
} from './constants';

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
  yield registerUserService(action.payload);
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

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(FORGOT_PASSWORD, forgotPassword),
  takeLatest(GET_USER_ID_FROM_TOKEN, getIdFromToken),
  takeLatest(RESET_PASSWORD, resetPassword),
];
