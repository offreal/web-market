import { createSelector } from 'reselect'

import { getProductsData } from './productsSelectors'

export const getCartAmountItems = (state) => state.cart.cartData.length

export const getCartItems = (state) => state.cart.cartData

export const getCartProducts = createSelector(
  getCartItems,
  getProductsData,
  (cartItems, productItems) =>
    productItems.filter((product) => cartItems.some((item) => item.productId === product.id)),
)
