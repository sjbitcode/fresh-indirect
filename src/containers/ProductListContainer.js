import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../actions/cart'
import CartUpdate from '../components/CartUpdate'
import { cartQuantity, cartTotal } from '../selectors/cart'


const ProductListContainer = ({ products, addToCart, cartQuantity, total}) => {
  return (
    <div>
      <strong>
        {cartQuantity}
      </strong>
      <br/>
      <strong>
        Cart total: {total}
      </strong>
      <ul style={{ listStyleType: 'none', padding: '0px' }}>
        {
          Object.keys(products).map(key =>
            <li key={key}>
              <h2>{products[key].name}</h2>
              <img src={products[key].imageUrl} alt={products[key].name} />
              <strong>{products[key].price}</strong>
              <CartUpdate product={products[key]} productId={key} addToCart={addToCart} />
            </li>
          )
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  cartQuantity: cartQuantity(state),
  total: cartTotal(state)
})

const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)