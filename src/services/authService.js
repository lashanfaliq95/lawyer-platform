import { post, get, deleteRequest } from 'helpers/apiHelper';

export const loginUserService = async (values) => {
  const result = await post('/auth/login', values);
  return result;
};

export const logoutUserService = async (values) => {
  const result = await post('/auth/logout', values);
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

export const renewAccessToken = async (refreshToken) => {
  const result = await post('/auth/token/', { refreshToken });
  return result;
};

export const deleteUserService = async (id) => {
  const result = await deleteRequest(`/users/${id}`);
  return result;
};

export const getValidityOfConfirmationTokenService = async (token) => {
  const result = await post('/auth/confirmation-token/', { token });
  return result;
};
