import {
  put,
  takeLatest,
  select,
  debounce,
  takeEvery,
} from 'redux-saga/effects';

import {
  getLawyerService,
  getLawyersService,
  getLawyerAvailabilityService,
} from 'services/userService';
import {
  getFilteredResultService,
  getNameOrFirmSuggestions,
  getLocationSuggestions,
} from 'services/searchService';
import {
  setLawyers,
  setLawyerDetails,
  setActiveFilters,
  setLawyerAvailability,
  setSearchSuggestionsForNameOrFirm,
  setSearchSuggestionsForLocation,
} from './actions';
import {
  GET_LAWYERS,
  GET_LAWYER_DETAILS,
  SET_FILTERS,
  SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  GET_LAWYER_AVAILABILITY,
  LOAD_LAWYER_AVAILABILITY,
  GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
  GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  CLEAR_FILTERS,
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

function* getSearchSuggestionsForNameOrFirm(action) {
  const { result } = yield getNameOrFirmSuggestions(action.payload);
  yield put(setSearchSuggestionsForNameOrFirm(result));
}

function* getSearchSuggestionsForLocation(action) {
  const { result } = yield getLocationSuggestions(action.payload);
  yield put(setSearchSuggestionsForLocation(result));
}

function* getLawyerDetails(action) {
  const { result } = yield getLawyerService(action.payload);
  yield put(setLawyerDetails(result));
}

export default [
  takeLatest(GET_LAWYERS, getLawyers),
  takeLatest(CLEAR_FILTERS, getFilteredSearchResult),
  takeEvery(LOAD_LAWYER_AVAILABILITY, getLawyerAvailability),
  takeLatest(GET_LAWYER_DETAILS, getLawyerDetails),
  debounce(500, SET_FILTERS, getFilteredSearchResult),
  debounce(500, SEARCH_BY_NAME_OR_FIRM_OR_LOCATION, getSearchResults),
  debounce(500, GET_LAWYER_AVAILABILITY, getLawyerAvailability),
  debounce(
    300,
    GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
    getSearchSuggestionsForNameOrFirm,
  ),
  debounce(
    100,
    GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
    getSearchSuggestionsForLocation,
  ),
];
