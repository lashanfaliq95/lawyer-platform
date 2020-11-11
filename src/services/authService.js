import { post, get } from 'helpers/apiHelper';

export const loginUserService = async (values) => {
  const result = await post('/auth/login', values);
  return result;
};

export const forgotPasswordService = async (values) => {
  const result = await post('/auth/forgot', values);
  return result;
};

export const resetTokenService = async (token) => {
  const result = await get(`/auth/reset-token/${token}`);
  return result;
};

export const resetPasswordService = async (values) => {
  const result = await post('/auth/reset-password/', values);
  return result;
};

export const registerUserService = async (values) => {
  const result = await post('/users', values);
  return result;
};

export const renewAccessToken = async (refreshToken) => {
  const result = await post('/auth/token/', { refreshToken });
  return result;
};
