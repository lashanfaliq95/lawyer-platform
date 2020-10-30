import {
  MARKER_CLICK,
  ON_MOUSE_ENTER_CARD,
  ON_MOUSE_LEAVE_CARD,
  GET_LAWYERS,
  SET_LAWYERS,
  SET_LOCATIONS,
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

export const setLocations = (data) => ({
  type: SET_LOCATIONS,
  payload: data,
});
