import {
  MARKER_CLICK,
  ON_MOUSE_ENTER_CARD,
  ON_MOUSE_LEAVE_CARD,
  GET_LAWYERS,
  SET_LAWYERS,
  SET_FILTERS,
  SET_ACTIVE_FILTERS,
  SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  SET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
  SET_SEARCH_SUGGESTIONS_FOR_LOCATION,
  GET_LAWYER_AVAILABILITY,
  SET_LAWYER_AVAILABILITY,
  LOAD_LAWYER_AVAILABILITY,
  GET_LAWYER_DETAILS,
  SET_LAWYER_DETAILS,
  CLEAR_FILTERS,
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

export const setFilters = (data) => ({
  type: SET_FILTERS,
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

export const setSearchSuggestionsForNameOrFirm = (term) => ({
  type: SET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM,
  payload: term,
});

export const getSearchSuggestionsForLocation = (term) => ({
  type: GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS,
  payload: term,
});

export const setSearchSuggestionsForLocation = (term) => ({
  type: SET_SEARCH_SUGGESTIONS_FOR_LOCATION,
  payload: term,
});

export const getSearchResult = (data) => ({
  type: SEARCH_BY_NAME_OR_FIRM_OR_LOCATION,
  payload: data,
});

export const getLawyerAvailability = (data) => ({
  type: GET_LAWYER_AVAILABILITY,
  payload: data,
});

export const setLawyerAvailability = (data) => ({
  type: SET_LAWYER_AVAILABILITY,
  payload: data,
});

export const loadLawyerAvailability = (data) => ({
  type: LOAD_LAWYER_AVAILABILITY,
  payload: data,
});

export const getLawyerDetails = (data) => ({
  type: GET_LAWYER_DETAILS,
  payload: data,
});

export const setLawyerDetails = (data) => ({
  type: SET_LAWYER_DETAILS,
  payload: data,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
  payload: {
    activeAvailability: [],
    activeSpecializations: [],
    freeFirstAppointment: false,
    appointmentWithImmediateConfirmation: false,
    activeLanguages: [],
  },
});
