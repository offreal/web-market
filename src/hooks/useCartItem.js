import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart as addItemToCartAction } from '../redux/actions/cartActions'
import { getCartItems } from '../redux/selectors/cartSelectors'

const useCartItem = () => {
  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()

  const addItemToCart = (productId) => {
    dispatch(addItemToCartAction(productId))
  }

  return {
    cartItems,
    addItemToCart,
  }
}

export default useCartItem
