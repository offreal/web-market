import {
  ADD_ITEM_TO_CART,
  INCREASE_AMOUNT_ITEM_FOR_CART,
  DECREASE_AMOUNT_ITEM_FOR_CART,
  REMOVE_ITEM_FROM_CART,
  DISCARD_ALL_ITEMS,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_REQUEST,
} from '../actions/cartActions'

const initialState = {
  orderIsFetching: false,
  successOrder: false,
  cartData: [],
}

const cartReducer = (state = initialState, action) => {
  const removeItemFromCartData = (productId) => ({
    ...state,
    cartData: state.cartData.filter((item) => item.productId !== productId),
    successOrder: false,
  })

  switch (action.type) {
    case ADD_ITEM_TO_CART:
      let amountCurrentItems = 0
      const cartDataWithoutCurrentItem = state.cartData.filter((item) =>
        item.productId === action.payload ? ((amountCurrentItems = item.amount), false) : true,
      )

      if (amountCurrentItems > 0) {
        return {
          ...state,
          cartData: [
            ...cartDataWithoutCurrentItem,
            {
              productId: action.payload,
              amount: amountCurrentItems + 1,
            },
          ],
          successOrder: false,
        }
      }

      return {
        ...state,
        cartData: [
          ...state.cartData,
          {
            productId: action.payload,
            amount: 1,
          },
        ],
        successOrder: false,
      }

    case REMOVE_ITEM_FROM_CART:
      return removeItemFromCartData(action.payload)

    case INCREASE_AMOUNT_ITEM_FOR_CART:
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.productId === action.payload && item.amount < 100) {
            return {
              ...item,
              amount: item.amount + 1,
            }
          }

          return item
        }),
      }

    case DECREASE_AMOUNT_ITEM_FOR_CART:
      const isItemHasLowAmount = state.cartData.some(
        (item) => item.productId === action.payload && item.amount === 1,
      )

      if (isItemHasLowAmount) {
        return removeItemFromCartData(action.payload)
      }

      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.productId === action.payload && item.amount > 0) {
            return {
              ...item,
              amount: item.amount - 1,
            }
          }

          return item
        }),
      }

    case DISCARD_ALL_ITEMS:
      return {
        ...state,
        cartData: [],
      }

    case MAKE_ORDER_REQUEST:
      return {
        ...state,
        orderIsFetching: true,
      }

    case MAKE_ORDER_SUCCESS:
      return {
        ...state,
        cartData: [],
        successOrder: true,
        orderIsFetching: false,
      }

    default:
      return state
  }
}

export default cartReducer
