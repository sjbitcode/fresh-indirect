import { ADD_CART_ITEM, REMOVE_CART_ITEM, SET_ITEM_QUANTITY } from '../actions/cart'

const initialState = {
  items: {
    "YrT8dLMCCuO7EdWEI8pfvPzkKuWXNzyG8bEqVHyY": 2,
    "SvI5mAbiJ6KNa5FAqucFgjViHAeXEeVGIGDkGw7J": 4,
    "nXwnhlkE8zKqGKstgHXYCum7z14AOqand7RnPUrP": 1,
    "uGtl5c7wMQ201i3dsOMNoxwZuo4XqnxDLY4UOJH3": 1
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

const removeItem = (state, productId) => {
  // filter out item to removed
  let newCart = Object.keys(state.items).reduce((obj, key) => {
    if (key !== productId) {
      obj[key] = state.items[key]
    }
    return obj
  }, {})

  return {
    ...state,
    items: newCart
  }
}

const setItemQuantity = (state, productId, quantity) => {
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
      return removeItem(state, action.productId)
    
    case SET_ITEM_QUANTITY:
      return setItemQuantity(state, action.productId, action.quantity)

    default:
      return state
  }
}

export default cartReducer
