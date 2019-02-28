export const ADD_CART_ITEM = 'cart@ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'cart@REMOVE_CART_ITEM'
export const SET_ITEM_QUANTITY = 'cart@SET_ITEM_QUANTITY'

export const addToCart = (productId, quantity) => ({
    type: ADD_CART_ITEM,
    productId,
    quantity
})

export const removeFromCart = (productId) => ({
  type: REMOVE_CART_ITEM,
  productId
})

export const setItemQuantity = (productId, quantity) => ({
  type: SET_ITEM_QUANTITY,
  productId,
  quantity
})

