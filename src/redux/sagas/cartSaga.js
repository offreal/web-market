import { takeEvery, put, call } from 'redux-saga/effects'

import Order from '../../api/order'
import { MAKE_ORDER_REQUEST, makeOrderSuccess, makeOrderError } from '../actions/cartActions'

export function* watchRequestOrderSaga() {
  yield takeEvery(MAKE_ORDER_REQUEST, function* (action) {
    try {
      yield call(() => Order.purchase(action.payload))

      yield put(makeOrderSuccess())
    } catch (error) {
      yield put(makeOrderError(error.message))
    }
  })
}
