import { all } from 'redux-saga/effects';
import FooterSaga from 'components/Footer/sagas';
import LoginPageSaga from 'components/LoginPage/sagas';
import SearchPageSaga from 'components/SearchPage/sagas';
import AppointmentSaga from 'components/AppointmentsPage/sagas';

function* rootSaga() {
  yield all([
    ...FooterSaga,
    ...LoginPageSaga,
    ...SearchPageSaga,
    ...AppointmentSaga,
  ]);
}

export default rootSaga;
