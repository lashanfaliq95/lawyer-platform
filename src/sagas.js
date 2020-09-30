import { all } from 'redux-saga/effects';
import CommonComponentSaga from 'components/CommonComponents/sagas';

function* rootSaga() {
  yield all([
    ...CommonComponentSaga, // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
  ]);
}

export default rootSaga;
