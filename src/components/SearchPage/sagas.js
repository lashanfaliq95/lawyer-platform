import { put, takeLatest } from 'redux-saga/effects';

import { getLawyersService } from 'services/userService';
import { getFiltersService } from 'services/searchService';
import { setLawyers, setFilters } from './actions';
import { GET_LAWYERS, GET_FILTERS } from './constants';

function* getLawyers() {
  const { result } = yield getLawyersService();
  if (result && result.data) {
    const lawyers = result.data;
    yield put(setLawyers(lawyers));
  }
}

function* getFilters() {
  console.log('in');
  const { result } = yield getFiltersService();
  if (result && result.data) {
    const filters = result.data;
    yield put(setFilters(filters));
  }
}

export default [
  takeLatest(GET_LAWYERS, getLawyers),
  takeLatest(GET_FILTERS, getFilters),
];
