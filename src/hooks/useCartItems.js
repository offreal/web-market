import { useSelector, useDispatch } from 'react-redux'

import { getCartItems, getCartProducts } from '../redux/selectors/cartSelectors'
import { getProductData } from '../redux/selectors/productsSelectors'
import {
  removeItemFromCart as removeItemFromCartAction,
  increaseAmountItemForCart as increaseAmountItemForCartAction,
  decreaseAmountItemForCart as decreaseAmountItemForCartAction,
  discardAllItems as discardAllItemsAction,
} from '../redux/actions/cartActions'

const useCartItems = () => {
  const cartItems = useSelector(getCartItems)
  const cartProducts = useSelector(getCartProducts)
  const cartProduct = useSelector(getProductData)
  const dispatch = useDispatch()

  const removeItemFromCart = (productId) => {
    dispatch(removeItemFromCartAction(productId))
  }

  const increaseAmountItemForCart = (productId) => {
    dispatch(increaseAmountItemForCartAction(productId))
  }

  const decreaseAmountItemForCart = (productId) => {
    dispatch(decreaseAmountItemForCartAction(productId))
  }

  const discardAllItems = () => {
    dispatch(discardAllItemsAction())
  }

  return {
    cartItems,
    cartProduct,
    cartProducts,
    removeItemFromCart,
    increaseAmountItemForCart,
    decreaseAmountItemForCart,
    discardAllItems,
  }
}

export default useCartItems
