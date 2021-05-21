import { takeLatest, put, select } from 'redux-saga/effects';
import {
  loginUserService,
  forgotPasswordService,
  resetTokenService,
  resetPasswordService,
  logoutUserService,
  deleteUserService,
  getValidityOfConfirmationTokenService,
} from 'services/authService';
import {
  registerUserService,
  updateUserPasswordService,
  updateUserInfoService,
  saveUserMessageService,
  registerLawyerService,
} from 'services/userService';

import {
  setUserDetails,
  getRefreshToken,
  clearStorage,
} from 'helpers/localStorageHelper';
import { setAccessTokenToRequest } from 'helpers/apiHelper';
import { getErrorToast, getSuccessToast } from 'helpers/toastHelper';

import {
  forgotPasswordSuccess,
  loginUserSuccess,
  setUserIdFromResetToken,
  registerUserSuccess,
  registerUserError,
  logoutUserSuccess,
  logoutUserError,
  setValidityOfConfirmationToken,
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
  REGISTER_EXPERT,
  GET_VALIDITY_OF_CONFIRMATION_TOKEN,
} from './constants';
import messages from './messages';

const getUserId = (state) =>
  state.login.userDetails && state.login.userDetails.id;

function* loginUser(action) {
  const response = yield loginUserService(action.payload);
  const { result } = response || {};
  if (result) {
    setUserDetails(result);
    yield put(loginUserSuccess(result));
    setAccessTokenToRequest(result.accessToken);
  } else {
    yield getErrorToast(messages.loginError);
  }
}

function* forgotPassword(action) {
  const { result } = yield forgotPasswordService(action.payload);
  if (result && result.data) {
    yield put(forgotPasswordSuccess());
  } else {
    yield getErrorToast(messages.forgotPwdError);
  }
}

function* registerUser(action) {
  const response = yield registerUserService(action.payload);
  const { result, error } = response || {};
  if (result) {
    yield put(registerUserSuccess());
  } else {
    yield put(registerUserError(error));
    yield getErrorToast(messages.registerError);
  }
}

function* getIdFromToken(action) {
  const response = yield resetTokenService(action.payload);
  const { result } = response || {};
  if (result && result.id) {
    yield put(setUserIdFromResetToken(result));
  } else {
    yield getErrorToast(messages.loginError);
  }
}

function* resetPassword(action) {
  const response = yield resetPasswordService(action.payload);
  const { result } = response || {};
  if (result && result.id) {
    yield put(setUserIdFromResetToken(result));
  } else {
    yield getErrorToast(messages.resetPwdError);
  }
}

function* logoutUser() {
  const response = yield logoutUserService({ refreshToken: getRefreshToken() });
  const { result, error } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield put(logoutUserError(error));
    yield getErrorToast(messages.logoutError);
  }
}

function* deleteUser() {
  const userId = yield select(getUserId);
  const response = yield deleteUserService(userId);
  const { result } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield getErrorToast(messages.deleteUsrError);
  }
}

function* updateUserPassword(action) {
  const userId = yield select(getUserId);
  const response = yield updateUserPasswordService(userId, action.payload);
  const { result } = response || {};
  if (result) {
    clearStorage();
    yield put(logoutUserSuccess());
  } else {
    yield getErrorToast(messages.updateUserPwdError);
  }
}

function* updateUserInfo(action) {
  const userId = yield select(getUserId);
  const response = yield updateUserInfoService(userId, action.payload);
  const { result } = response || {};
  if (result) {
    yield getSuccessToast(messages.updateUserInfoSuccess);
  } else {
    yield getErrorToast(messages.saveUsrMsgError);
  }
}

function* saveUserMessage(action) {
  const userId = yield select(getUserId);
  const response = yield saveUserMessageService(userId, action.payload);
  const { result } = response || {};
  if (result) {
    yield getSuccessToast(messages.updateUserInfoSuccess);
  } else {
    yield getErrorToast(messages.loginError);
  }
}

function* registerLawyer(action) {
  const response = yield registerLawyerService(action.payload);
  const { result, error } = response || {};
  if (result) {
    yield put(registerUserSuccess());
  } else {
    yield put(registerUserError(error));
    yield getErrorToast(messages.registerError);
  }
}

function* getValidityOfConfirmationToken(action) {
  const response = yield getValidityOfConfirmationTokenService(action.payload);
  const { result } = response || {};
  if (result && result.isConfirmationTokenValid) {
    yield put(setValidityOfConfirmationToken(result.isConfirmationTokenValid));
  } else {
    yield getErrorToast(messages.loginError);
  }
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
  takeLatest(REGISTER_EXPERT, registerLawyer),
  takeLatest(
    GET_VALIDITY_OF_CONFIRMATION_TOKEN,
    getValidityOfConfirmationToken,
  ),
];
