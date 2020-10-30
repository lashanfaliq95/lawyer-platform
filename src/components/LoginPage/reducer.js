import { FORGOT_PASSWORD_SUCCESS } from './constants';

const initialState = {
  isForgotPasswordSuccess: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isForgotPasswordSuccess: true,
      };
    default:
      return state;
  }
};

export default login;
