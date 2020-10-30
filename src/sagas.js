import { all } from 'redux-saga/effects';
import FooterSaga from 'components/Footer/sagas';
import LoginPageSaga from 'components/LoginPage/sagas';
import SearchPageSaga from 'components/SearchPage/sagas';

function* rootSaga() {
  yield all([
    ...FooterSaga,
    ...LoginPageSaga,
    ...SearchPageSaga,
  ]);
}

export default rootSaga;
