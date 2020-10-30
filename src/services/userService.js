import { get } from 'utils/apiHelper';

// eslint-disable-next-line import/prefer-default-export
export const getLawyersService = async () => {
  const result = await get('/users/lawyers');
  return result;
};
