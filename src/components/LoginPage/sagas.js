import { takeLatest } from 'redux-saga/effects';
import { loginUserService, resetPasswordService } from 'services/authService';
import { LOGIN_USER, RESET_PASSWORD } from './constants';

function* loginUser(action) {
  yield loginUserService(action.payload);
}

function* resetPassword(action) {
  yield resetPasswordService(action.payload);
}

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(RESET_PASSWORD, resetPassword),
];
