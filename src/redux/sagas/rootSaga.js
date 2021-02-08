import { all } from 'redux-saga/effects'
import { watchInitializeAppSaga } from './appSaga'
import { watchRequestOrderSaga } from './cartSaga'
import { watchGetProductSaga, watchGetProductsSaga } from './productsSaga'

export default function* rootSaga() {
  yield all([
    watchInitializeAppSaga(),
    watchGetProductSaga(),
    watchGetProductsSaga(),
    watchRequestOrderSaga(),
  ])
}
