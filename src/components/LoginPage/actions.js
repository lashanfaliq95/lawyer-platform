import { LOGIN_USER } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const loginUser = (values) => ({
  type: LOGIN_USER,
  payload: values,
});
