export const ADD_ITEM_TO_CART = 'web-market/cart/ADD_ITEM_TO_CART'
export const REMOVE_ITEM_FROM_CART = 'web-market/cart/REMOVE_ITEM_FROM_CART'
export const INCREASE_AMOUNT_ITEM_FOR_CART = 'web-market/cart/INCREASE_AMOUNT_ITEM_FOR_CART'
export const DECREASE_AMOUNT_ITEM_FOR_CART = 'web-market/cart/DECREASE_AMOUNT_ITEM_FOR_CART'
export const DISCARD_ALL_ITEMS = 'web-market/cart/DISCARD_ALL_ITEMS'
export const MAKE_ORDER_REQUEST = 'web-market/cart/MAKE_ORDER_REQUEST'
export const MAKE_ORDER_SUCCESS = 'web-market/cart/MAKE_ORDER_SUCCESS'
export const MAKE_ORDER_ERROR = 'web-market/cart/MAKE_ORDER_ERROR'

export const addItemToCart = (productId) => ({ type: ADD_ITEM_TO_CART, payload: productId })

export const removeItemFromCart = (productId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: productId,
})

export const increaseAmountItemForCart = (productId) => ({
  type: INCREASE_AMOUNT_ITEM_FOR_CART,
  payload: productId,
})

export const decreaseAmountItemForCart = (productId) => ({
  type: DECREASE_AMOUNT_ITEM_FOR_CART,
  payload: productId,
})

export const discardAllItems = () => ({ type: DISCARD_ALL_ITEMS })

export const makeOrderRequest = (products) => ({ type: MAKE_ORDER_REQUEST, payload: products })

export const makeOrderSuccess = () => ({ type: MAKE_ORDER_SUCCESS })

export const makeOrderError = (errorMessage) => ({ type: MAKE_ORDER_ERROR, payload: errorMessage })
