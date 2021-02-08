import { takeEvery, put, call } from 'redux-saga/effects'

import { products } from '../../api'
import {
  getProductSuccess,
  getProductsSuccess,
  getProductError,
  getProductsError,
  GET_PRODUCT_REQUEST,
  GET_PRODUCTS_REQUEST,
} from '../actions/productsActions'
import { getProductData, getProductsData } from '../../utils/normalizeProducts'

export function* watchGetProductSaga() {
  yield takeEvery(GET_PRODUCT_REQUEST, function* (action) {
    try {
      const requestProductData = yield call(() => products.getProduct(action.payload))
      const productData = getProductData(requestProductData)

      yield put(getProductSuccess(productData))
    } catch (error) {
      yield put(getProductError(error.message))
    }
  })
}

export function* watchGetProductsSaga() {
  yield takeEvery(GET_PRODUCTS_REQUEST, function* () {
    try {
      const requestProductsData = yield call(() => products.getProducts())
      const productsData = getProductsData(requestProductsData)

      yield put(getProductsSuccess(productsData))
    } catch (error) {
      yield put(getProductsError(error.message))
    }
  })
}
