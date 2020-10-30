import { takeLatest, put } from 'redux-saga/effects';
import {
  loginUserService,
  forgotPasswordService,
  registerUserService,
} from 'services/authService';

import { forgotPasswordSuccess } from './actions';
import { LOGIN_USER, FORGOT_PASSWORD, REGISTER_USER } from './constants';

function* loginUser(action) {
  yield loginUserService(action.payload);
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

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(REGISTER_USER, registerUser),
  takeLatest(FORGOT_PASSWORD, forgotPassword),
];
