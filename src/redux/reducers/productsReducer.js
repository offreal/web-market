import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../actions/productsActions'

const initialState = {
  isFetching: false,
  errorMessage: null,
  productsData: [],
  productData: null,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case GET_PRODUCT_SUCCESS:
      return { ...state, productData: action.payload, isFetching: false }

    case GET_PRODUCTS_SUCCESS:
      return { ...state, productsData: action.payload, isFetching: false }

    case GET_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false }

    default:
      return state
  }
}

export default productsReducer
