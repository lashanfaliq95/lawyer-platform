import { LOGIN_USER, RESET_PASSWORD } from './constants';

export const loginUser = (values) => ({
  type: LOGIN_USER,
  payload: values,
});

export const resetPassword = (value) => ({
  type: RESET_PASSWORD,
  payload: value,
});
