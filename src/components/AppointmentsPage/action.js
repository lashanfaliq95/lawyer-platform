import {
  DELETE_APPOINTMENT,
  SET_APPOINTMENT,
  TOGGLE_CANCELLATION_MODAL,
} from './constants';

export const deleteAppointment = (payload) => ({
  type: DELETE_APPOINTMENT,
  payload,
});

export const setAppointment = (payload) => ({
  type: SET_APPOINTMENT,
  payload,
});

export const toggleCancellationModal = (payload) => ({
  type: TOGGLE_CANCELLATION_MODAL,
  payload,
});
