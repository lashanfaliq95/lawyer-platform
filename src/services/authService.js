import { post } from 'utils/apiHelper';

export const loginUserService = async (values) => {
  const result = await post('/auth/login', values);
  return result;
};

export const forgotPasswordService = async (values) => {
  const result = await post('/auth/forgot', values);
  return result;
};

export const registerUserService = async (values) => {
  const result = await post('/users', values);
  return result;
};
