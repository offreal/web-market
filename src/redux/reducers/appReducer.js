import { INITIALIZED_SUCCESS } from '../actions/appActions'

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true }

    default:
      return state
  }
}

export default appReducer
