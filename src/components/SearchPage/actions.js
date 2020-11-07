import {
  MARKER_CLICK,
  ON_MOUSE_ENTER_CARD,
  ON_MOUSE_LEAVE_CARD,
  GET_LAWYERS,
  SET_LAWYERS,
  GET_FILTERS,
  SET_FILTERS,
  SET_LANGUAGE_FILTERS,
  SET_ACTIVE_FILTERS,
  SET_SPECIALIZATION_FILTERS,
  SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
} from './constants';

export const onMouseEnterCard = (values) => ({
  type: ON_MOUSE_ENTER_CARD,
  payload: values,
});

export const onMouseLeaveCard = (values) => ({
  type: ON_MOUSE_LEAVE_CARD,
  payload: values,
});

export const onMarkerClick = (value) => ({
  type: MARKER_CLICK,
  payload: value,
});

export const getLawyers = () => ({
  type: GET_LAWYERS,
});

export const setLawyers = (data) => ({
  type: SET_LAWYERS,
  payload: data,
});

export const getFilters = () => ({
  type: GET_FILTERS,
});

export const setFilters = (data) => ({
  type: SET_FILTERS,
  payload: data,
});

export const setLanguageFilters = (data) => ({
  type: SET_LANGUAGE_FILTERS,
  payload: data,
});

export const setSpecializationFilters = (data) => ({
  type: SET_SPECIALIZATION_FILTERS,
  payload: data,
});

export const setActiveFilters = (data) => ({
  type: SET_ACTIVE_FILTERS,
  payload: data,
});

export const getSearchSuggestionsForNameOrFirm = (term) => ({
  type: GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  payload: term,
});

export const getSearchSuggestionsForLocation = (term) => ({
  type: GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
  payload: term,
});

export const getSearchResult = (data) => ({
  type: SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  payload: data,
});
