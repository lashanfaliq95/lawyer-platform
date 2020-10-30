import {
  LOGIN_USER,
  FORGOT_PASSWORD,
  REGISTER_USER,
  FORGOT_PASSWORD_SUCCESS,
} from './constants';

export const loginUser = (values) => ({
  type: LOGIN_USER,
  payload: values,
});

export const registerUser = (values) => ({
  type: REGISTER_USER,
  payload: values,
});

export const forgotPassword = (value) => ({
  type: FORGOT_PASSWORD,
  payload: value,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});
