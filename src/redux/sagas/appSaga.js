import { takeEvery, put } from 'redux-saga/effects'

import { initializedSuccess, INITIALIZE_APP } from '../actions/appActions'

export function* watchInitializeAppSaga() {
  yield takeEvery(INITIALIZE_APP, function* () {
    yield put(initializedSuccess())
  })
}
