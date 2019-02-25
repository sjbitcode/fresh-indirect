export const ADD_CART_ITEM = 'cart@ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'cart@REMOVE_CART_ITEM'
export const UPDATE_CART_TOTAL = 'cart@UPDATE_CART_TOTAL'

export const addToCart = (productId, quantity) => ({
    type: ADD_CART_ITEM,
    productId,
    quantity
})

export const removeFromCart = (productId, quantity) => ({
  type: REMOVE_CART_ITEM,
  productId,
  quantity
})

export const updateCartTotal = () => ({
  type: UPDATE_CART_TOTAL
})

