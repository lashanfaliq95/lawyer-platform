import { getUserDetails } from 'helpers/localStorageHelper';
import {
  FORGOT_PASSWORD_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, SET_USER_ID_FROM_TOKEN,
} from './constants';

const initialState = {
  isForgotPasswordSuccess: false,
  userDetails: getUserDetails(),
  loginError: null,
  resetUser: {},
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
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: action.payload.message,
      };
    case SET_USER_ID_FROM_TOKEN:
      return {
        ...state,
        resetUser: action.payload,
      };
    default:
      return state;
  }
};

export default login;
