import {
  LOGIN_USER,
  FORGOT_PASSWORD,
  REGISTER_USER,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD_ERROR,
  GET_USER_ID_FROM_TOKEN,
  SET_USER_ID_FROM_TOKEN,
  RESET_PASSWORD,
} from './constants';

export const loginUser = (values) => ({
  type: LOGIN_USER,
  payload: values,
});

export const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  payload: {
    id: data.id,
    roleId: data.roleId,
  },
});

export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

export const registerUser = (values) => ({
  type: REGISTER_USER,
  payload: values,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserError = (error) => ({
  type: REGISTER_USER_ERROR,
  payload: error,
});

export const forgotPassword = (value) => ({
  type: FORGOT_PASSWORD,
  payload: value,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordError = (error) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: error,
});

export const getUserIdFromResetToken = (token) => ({
  type: GET_USER_ID_FROM_TOKEN,
  payload: token,
});

export const setUserIdFromResetToken = (data) => ({
  type: SET_USER_ID_FROM_TOKEN,
  payload: data,
});

export const resetPassword = (data) => ({
  type: RESET_PASSWORD,
  payload: data,
});
