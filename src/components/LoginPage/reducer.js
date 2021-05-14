import { getUserDetails } from 'helpers/localStorageHelper';
import {
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SET_USER_ID_FROM_TOKEN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './constants';

const initialState = {
  isForgotPasswordSuccess: false,
  userDetails: getUserDetails(),
  loginError: null,
  resetUser: {},
  isRegisterUserSuccess: false,
  registerUserError: null,
  logoutUserError: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isForgotPasswordSuccess: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        isRegisterUserSuccess: false,
        registerUserError: null,
        isLogoutUserSuccess: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: action.payload.message,
        isRegisterUserSuccess: false,
        registerUserError: null,
      };
    case SET_USER_ID_FROM_TOKEN:
      return {
        ...state,
        resetUser: action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegisterUserSuccess: true,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        registerUserError: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        userDetails: null,
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        logoutUserError: action.payload,
      };
    default:
      return state;
  }
};

export default login;
