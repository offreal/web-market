import { combineReducers } from 'redux'

import appReducer from './appReducer'
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  app: appReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default rootReducer
