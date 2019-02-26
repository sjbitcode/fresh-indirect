import { createSelector } from 'reselect'

export const cartItems = state => state.cart.items
export const products = state => state.products

// Total number of items in cart
export const cartQuantity = createSelector(
  cartItems,
  items => Object.keys(items).reduce((acc, key) => acc + items[key], 0)
)

// Cart total
export const cartTotal = createSelector(
  products,
  cartItems,
  (productsObj, cartItemsObj) => (
    Object.keys(cartItemsObj)
    .reduce(
      (acc, key) => (acc + (cartItemsObj[key] * productsObj[key].price)),
      0)
  )
)
