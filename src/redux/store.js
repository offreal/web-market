import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import throttle from 'lodash.throttle'

import { loadState, saveState } from '../utils/stateController'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleWare()

const persistedState = loadState()
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

store.subscribe(
  throttle(() => {
    saveState({
      products: store.getState().products,
      cart: store.getState().cart,
    })
  }, 1000),
)

sagaMiddleware.run(rootSaga)

export default store
