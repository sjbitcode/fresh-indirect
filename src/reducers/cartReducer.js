import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart'

const initialState = {
  items: {},
  total: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      console.log('Added item to cart')
      return state
    
    case REMOVE_CART_ITEM:
      console.log('Removed item from cart')
      return state
    
    default:
      return state
  }
}

export default cartReducer
