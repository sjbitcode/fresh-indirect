import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../actions/products'

const initialState = {}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('Added product')
      return state
    
    case REMOVE_PRODUCT:
      console.log('Removed product')
      return state
    
    case UPDATE_PRODUCT:
      console.log('Updated product')
      return state

    default:
      return state
  }
}

export default productReducer
