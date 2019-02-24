import { createStore, combineReducers } from 'redux'

import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'

export default function createReduxStore() {
  const reducers = {
    cart: cartReducer,
    product: productReducer
  }

  return createStore(combineReducers(reducers))
}
