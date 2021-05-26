import { get, post, put } from 'helpers/apiHelper';
import qs from 'qs';

export const getLawyerService = async (id) => {
  const result = await get(`/users/lawyers/${id}`);
  return result;
};

export const getLawyersService = async () => {
  const result = await get('/users/lawyers');
  return result;
};

export const getLawyerAvailabilityService = async ({ id, startDate }) => {
  const startDateQuery = qs.stringify({ startDate });
  const result = await get(
    `/users/lawyers/${id}/availability?${startDateQuery}`,
  );
  return result;
};

export const registerUserService = async (values) => {
  const result = await post('/users', values);
  return result;
};

export const updateUserPasswordService = async (id, values) => {
  const result = await put(`/users/${id}/password`, values);
  return result;
};

export const updateUserInfoService = async (id, values) => {
  const result = await put(`/users/${id}`, values);
  return result;
};

export const saveUserMessageService = async (id, values) => {
  const result = await post(`/users/${id}/message`, values);
  return result;
};

export const registerLawyerService = async (values) => {
  const result = await post('/users/lawyers', values);
  return result;
};
