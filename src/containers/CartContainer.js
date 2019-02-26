import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/CartList'
import { cartItems, cartQuantity, cartTotal, products } from '../selectors/cart'

const CartContainer = ({ cartQuantity, cartTotal, products, cartItems}) => {
  return (
    <div>
      <CartList products={products} items={cartItems}/>
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

export default connect(mapStateToProps)(CartContainer)