import {
  put, takeLatest, select, debounce, takeEvery,
} from 'redux-saga/effects';

import {
  getLawyersService,
  getLawyerAvailabilityService,
} from 'services/userService';
import {
  getFilteredResultService,
} from 'services/searchService';
import {
  setLawyers,
  setActiveFilters,
  setLawyerAvailability,
} from './actions';
import {
  GET_LAWYERS,
  SET_LANGUAGE_FILTERS,
  SET_SPECIALIZATION_FILTERS,
  SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  GET_LAWYER_AVAILABILITY,
  LOAD_LAWYER_AVAILABILITY,
} from './constants';

const getActiveFilters = (state) => state.search.activeFilters;

function* getLawyers() {
  const { result } = yield getLawyersService();
  if (result) {
    yield put(setLawyers(result));
  }
}

function* getFilteredSearchResult(action) {
  const activeFilters = yield select(getActiveFilters);
  const updatedActiveFilters = { ...activeFilters, ...action.payload };
  yield put(setActiveFilters(updatedActiveFilters));
  const { result } = yield getFilteredResultService({
    activeFilters: updatedActiveFilters,
  });
  if (result) {
    yield put(setLawyers(result));
  }
}

function* getSearchResults(action) {
  const activeFilters = yield select(getActiveFilters);
  const { result } = yield getFilteredResultService({
    ...action.payload,
    activeFilters,
  });
  if (result) {
    yield put(setLawyers(result));
  }
}

function* getLawyerAvailability(action) {
  const { result } = yield getLawyerAvailabilityService({ ...action.payload });
  const { id } = action.payload;
  if (result) {
    yield put(setLawyerAvailability({ id, data: result[id] }));
  } else {
    yield put(setLawyerAvailability({ id, data: null }));
  }
}

export default [
  takeLatest(GET_LAWYERS, getLawyers),
  takeEvery(LOAD_LAWYER_AVAILABILITY, getLawyerAvailability),
  debounce(500, SET_LANGUAGE_FILTERS, getFilteredSearchResult),
  debounce(500, SET_SPECIALIZATION_FILTERS, getFilteredSearchResult),
  debounce(500, SEARCH_BY_NAME_OR_FIRM_OR_LOCATION, getSearchResults),
  debounce(500, GET_LAWYER_AVAILABILITY, getLawyerAvailability),
];
