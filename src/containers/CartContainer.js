import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/CartList'
import { setItemQuantity, removeFromCart } from '../actions/cart'
import { cartItems, cartQuantity, cartTotal, products } from '../selectors/cart'

const CartContainer = ({ cartQuantity, cartTotal, products, cartItems, setItemQuantity, removeFromCart }) => {
  return (
    <div>
      <CartList products={products} items={cartItems} setQuantity={setItemQuantity} removeFromCart={removeFromCart}/>
      <strong>Subtotal ({cartQuantity} items): {cartTotal}</strong>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartQuantity: cartQuantity(state),
  cartTotal: cartTotal(state),
  products: products(state),
  cartItems: cartItems(state)
})

const mapDispatchToProps = {
  setItemQuantity,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)