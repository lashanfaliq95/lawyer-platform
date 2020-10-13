import { takeLatest } from 'redux-saga/effects';
import { loginUserService } from 'services/authService';
import { LOGIN_USER } from './constants';

function* loginUser(action) {
  yield loginUserService(action.payload);
}

export default [takeLatest(LOGIN_USER, loginUser)];
