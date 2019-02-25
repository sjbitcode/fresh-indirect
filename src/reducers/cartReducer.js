import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_TOTAL } from '../actions/cart'

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
    
    case UPDATE_CART_TOTAL:
      console.log(action)
      console.log('Updated cart total')
      console.log(state.total)
      return {
        ...state,
        total: state.total + 1
      }
    
    default:
      return state
  }
}

export default cartReducer
