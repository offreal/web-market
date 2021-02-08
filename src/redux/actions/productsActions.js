export const GET_PRODUCT_REQUEST = 'web-market/products/GET_PRODUCT_REQUEST'
export const GET_PRODUCT_SUCCESS = 'web-market/products/GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_ERROR = 'web-market/products/GET_PRODUCT_ERROR'
export const GET_PRODUCTS_REQUEST = 'web-market/products/GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'web-market/products/GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'web-market/products/GET_PRODUCTS_ERROR'

export const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST })

export const getProductsSuccess = (productsData) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: productsData,
})

export const getProductsError = (errorMessage) => ({
  type: GET_PRODUCTS_ERROR,
  payload: errorMessage,
})

export const getProductRequest = (productId) => ({ type: GET_PRODUCT_REQUEST, payload: productId })

export const getProductSuccess = (productData) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: productData,
})

export const getProductError = (errorMessage) => ({
  type: GET_PRODUCT_ERROR,
  payload: errorMessage,
})
