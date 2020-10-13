import { all } from 'redux-saga/effects';
import CommonComponentSaga from 'components/CommonComponents/sagas';
import LoginPageSaga from 'components/LoginPage/sagas';

function* rootSaga() {
  yield all([
    ...CommonComponentSaga,
    ...LoginPageSaga,
  ]);
}

export default rootSaga;
