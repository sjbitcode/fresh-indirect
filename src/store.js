import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'

export default function createReduxStore() {
  const reducers = {
    cart: cartReducer,
    products: productReducer
  }

  return createStore(combineReducers(reducers), composeWithDevTools())
}
