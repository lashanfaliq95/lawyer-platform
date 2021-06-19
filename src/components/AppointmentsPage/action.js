import {
  DELETE_APPOINTMENT,
  SET_APPOINTMENT,
  TOGGLE_CANCELLATION_MODAL,
  SET_ACTIVE_USER_APPOINTMENT,
  SET_ACTIVE_PAST_APPOINTMENT,
  SET_CURRENT_APPOINTMENT,
} from './constants';

export const deleteAppointment = (payload) => ({
  type: DELETE_APPOINTMENT,
  payload,
});

export const setAppointment = (payload) => ({
  type: SET_APPOINTMENT,
  payload,
});

export const setActiveUserAppointment = (payload) => ({
  type: SET_ACTIVE_USER_APPOINTMENT,
  payload,
});

export const setCurrentAppointment = (payload) => ({
  type: SET_CURRENT_APPOINTMENT,
  payload,
});

export const setActivePastAppointment = (payload) => ({
  type: SET_ACTIVE_PAST_APPOINTMENT,
  payload,
});

export const toggleCancellationModal = (payload) => ({
  type: TOGGLE_CANCELLATION_MODAL,
  payload,
});
