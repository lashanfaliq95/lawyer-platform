import {
  put, takeLatest, select, debounce,
} from 'redux-saga/effects';

import { getLawyersService } from 'services/userService';
import { getFiltersService, getFilteredResultService } from 'services/searchService';
import { setLawyers, setFilters, setActiveFilters } from './actions';
import {
  GET_LAWYERS,
  GET_FILTERS,
  SET_LANGUAGE_FILTERS,
  SET_SPECIALIZATION_FILTERS,
  // GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
} from './constants';

const getActiveFilters = (state) => state.search.activeFilters;

function* getLawyers() {
  const { result } = yield getLawyersService();
  if (result && result.data) {
    const lawyers = result.data;
    yield put(setLawyers(lawyers));
  }
}

function* getFilters() {
  const { result } = yield getFiltersService();
  if (result && result.data) {
    const filters = result.data;
    yield put(setFilters(filters));
  }
}

function* getFilteredSearchResult(action) {
  const activeFilters = yield select(getActiveFilters);
  const updatedActiveFilters = { ...activeFilters, ...action.payload };
  yield put(setActiveFilters(updatedActiveFilters));
  const { result } = yield getFilteredResultService({ activeFilters: updatedActiveFilters });
  if (result && result.data) {
    const lawyers = result.data;
    yield put(setLawyers(lawyers));
  }
}

function* getSearchResults(action) {
  const activeFilters = yield select(getActiveFilters);
  const { result } = yield getFilteredResultService({ ...action.payload, activeFilters });
  if (result && result.data) {
    const lawyers = result.data;
    yield put(setLawyers(lawyers));
  }
}

export default [
  takeLatest(GET_LAWYERS, getLawyers),
  takeLatest(GET_FILTERS, getFilters),
  debounce(500, SET_LANGUAGE_FILTERS, getFilteredSearchResult),
  debounce(500, SET_SPECIALIZATION_FILTERS, getFilteredSearchResult),
  // debounce(1000, GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM, debounceSearchSuggestions),
  debounce(500, SEARCH_BY_NAME_OR_FIRM_OR_LOCATION, getSearchResults),
];
