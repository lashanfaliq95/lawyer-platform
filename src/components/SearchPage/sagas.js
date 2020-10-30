import { put, takeLatest } from 'redux-saga/effects';
import { getLawyersService } from 'services/userService';

import { setLawyers } from './actions';
import { GET_LAWYERS } from './constants';

function* getLawyers() {
  const { result } = yield getLawyersService();
  if (result && result.data) {
    yield put(setLawyers(result.data));
  }
}

export default [
  takeLatest(GET_LAWYERS, getLawyers),
];
