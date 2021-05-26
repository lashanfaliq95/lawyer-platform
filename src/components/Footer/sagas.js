import { takeLatest } from 'redux-saga/effects';

function* searchByLetter() {
  yield 'Redirect to search';
}

export default [takeLatest('asd', searchByLetter)];
