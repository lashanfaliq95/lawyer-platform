import { get } from 'helpers/apiHelper';
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
    `/users/lawyers/availability/${id}?${startDateQuery}`,
  );
  return result;
};
