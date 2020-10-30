import { get } from 'utils/apiHelper';

export const getLawyersService = async () => {
  const result = await get('/users/lawyers');
  return result;
};

export const getLawyersLocationsService = async (ids) => {
  const result = await get(`/users/locations?ids=${ids.join()}`);
  return result;
};
