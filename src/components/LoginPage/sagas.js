import { takeLatest, put, select } from 'redux-saga/effects';
import {
  loginUserService,
  forgotPasswordService,
  resetTokenService,
  resetPasswordService,
  logoutUserService,
  deleteUserService,
} from 'services/authService';
import {
  registerUserService,
  updateUserPasswordService,
  updateUserInfoService,
  saveUserMessageService,
} from 'services/userService';

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
  UPDATE_USER_PASSWORD,
  UPDATE_USER_INFO,
  SET_USER_MESSAGE,
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
  const userId = yield select(getUserId);
  const response = yield deleteUserService(userId);
  const { result, error } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield put(logoutUserError(error));
  }
}

function* updateUserPassword(action) {
  const userId = yield select(getUserId);
  const response = yield updateUserPasswordService(userId, action.payload);
  const { result, error } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield put(logoutUserError(error));
  }
}

function* updateUserInfo(action) {
  const userId = yield select(getUserId);
  const response = yield updateUserInfoService(userId, action.payload);
  // TODO : Show success / failure messages
  yield response;
}

function* saveUserMessage(action) {
  const userId = yield select(getUserId);
  const response = yield saveUserMessageService(userId, action.payload);
  // TODO : Show success / failure messages
  yield response;
}

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(UPDATE_USER_PASSWORD, updateUserPassword),
  takeLatest(UPDATE_USER_INFO, updateUserInfo),
  takeLatest(SET_USER_MESSAGE, saveUserMessage),
  takeLatest(DELETE_USER, deleteUser),
  takeLatest(FORGOT_PASSWORD, forgotPassword),
  takeLatest(GET_USER_ID_FROM_TOKEN, getIdFromToken),
  takeLatest(RESET_PASSWORD, resetPassword),
  takeLatest(LOGOUT_USER, logoutUser),
];
