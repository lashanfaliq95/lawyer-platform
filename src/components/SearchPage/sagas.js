import { put, takeLatest } from 'redux-saga/effects';
import {
  getLawyersService,
  getLawyersLocationsService,
} from 'services/userService';

import { setLawyers, setLocations } from './actions';
import { GET_LAWYERS } from './constants';

function* getLawyers() {
  const { result } = yield getLawyersService();
  if (result && result.data) {
    const lawyers = result.data;
    yield put(setLawyers(lawyers));
    const ids = lawyers.map((lawyer) => lawyer.id);
    const { result: locationResults } = yield getLawyersLocationsService(ids);
    if (locationResults && locationResults.data) {
      yield put(setLocations(locationResults.data));
    }
  }
}

export default [takeLatest(GET_LAWYERS, getLawyers)];
