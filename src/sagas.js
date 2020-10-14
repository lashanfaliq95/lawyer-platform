import { all } from 'redux-saga/effects';
import FooterSaga from 'components/Footer/sagas';
import LoginPageSaga from 'components/LoginPage/sagas';

function* rootSaga() {
  yield all([
    ...FooterSaga,
    ...LoginPageSaga,
  ]);
}

export default rootSaga;
