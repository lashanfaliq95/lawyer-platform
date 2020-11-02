import { get } from 'utils/apiHelper';

// eslint-disable-next-line import/prefer-default-export
export const getFiltersService = async () => {
  const result = await get('/search/filters');
  return result;
};
