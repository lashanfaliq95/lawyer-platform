import { SEARCH_BY_LETTER } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const searchLawyerByLetter = (letter) => ({
  type: SEARCH_BY_LETTER,
  payload: letter,
});
