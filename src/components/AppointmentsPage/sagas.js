import {
  takeLatest, delay, put, select,
} from 'redux-saga/effects';
import { DELETE_APPOINTMENT } from './constants';
import { setAppointment, toggleCancellationModal } from './action';

const getUserAppointments = (state) => state.appointments.userAppointments;

function* deleteAppointment() {
  console.log('in');
  const userAppointments = yield select(getUserAppointments);

  yield delay(1000);
  yield put(setAppointment(userAppointments.splice(1, 1)));
  yield put(toggleCancellationModal(false));
}

export default [takeLatest(DELETE_APPOINTMENT, deleteAppointment)];
