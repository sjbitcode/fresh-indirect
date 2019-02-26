import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart'

const initialState = {
  items: {
    "YrT8dLMCCuO7EdWEI8pfvPzkKuWXNzyG8bEqVHyY": 2
  }
}

const addItemToCart = (state, productId, quantity) => {
  console.log(`Added item with ID ${productId} (${quantity} quantity) to cart`)

  // Check if item already exists
  if (productId in state.items) {
    console.log(`Item ${productId} already exists with quantity ${state.items[productId]}`)
    quantity = state.items[productId] + quantity
  }

  return Object.assign({}, state, {
    items: {
      ...state.items,
      [productId]: quantity
    }
  })
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return addItemToCart(state, action.productId, action.quantity)

    case REMOVE_CART_ITEM:
      console.log(`Removed item with ID ${action.productId} (${action.quantity} quantity) to cart`)
      return state

    default:
      return state
  }
}

export default cartReducer
