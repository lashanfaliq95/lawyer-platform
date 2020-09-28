import { takeLatest } from 'redux-saga/effects';
import { SEARCH_BY_LETTER } from './constants';

function* searchByLetter() {
  yield 'Redirect to search';
}

export default [takeLatest(SEARCH_BY_LETTER, searchByLetter)];
