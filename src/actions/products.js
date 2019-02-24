export const ADD_PRODUCT = 'product@ADD_PRODUCT'
export const REMOVE_PRODUCT = 'product@REMOVE_PRODUCT'
export const UPDATE_PRODUCT = 'product@UPDATE_PRODUCT'

export const addProduct = (productId, productObj) => ({
  type: ADD_PRODUCT,
  productId,
  productObj
})

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
})

export const updateProduct = (productId, productObj) => ({
  type: UPDATE_PRODUCT,
  productId,
  productObj
})