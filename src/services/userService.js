import { get } from 'utils/apiHelper';
import qs from 'qs';

export const getLawyersService = async () => {
  const result = await get('/users/lawyers');
  return result;
};

export const getLawyerAvailabilityService = async ({ id, startDate }) => {
  const startDateQuery = qs.stringify({ startDate });
  const result = await get(`/users/lawyers/availability/${id}?${startDateQuery}`);
  return result;
};
