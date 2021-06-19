import { takeLatest, delay, put, select } from 'redux-saga/effects';
import { DELETE_APPOINTMENT } from './constants';
import {
  setActiveUserAppointment,
  setAppointment,
  toggleCancellationModal,
} from './action';

const getUserAppointments = (state) => state.appointments.userAppointments;

const getActiveUserAppointment = (state) =>
  state.appointments.activeUserAppointment;

function* deleteAppointment({ payload }) {
  const userAppointments = yield select(getUserAppointments);
  const activeUserAppointment = yield select(getActiveUserAppointment);

  yield delay(1000);

  const updatedUserAppointments = userAppointments.filter(
    (appointment) => appointment.id !== payload,
  );
  yield put(setAppointment(updatedUserAppointments));
  if (
    activeUserAppointment &&
    activeUserAppointment.id === payload &&
    updatedUserAppointments.length !== 0
  ) {
    setActiveUserAppointment(updatedUserAppointments[0]);
  }
  yield put(toggleCancellationModal(false));
}

export default [takeLatest(DELETE_APPOINTMENT, deleteAppointment)];
