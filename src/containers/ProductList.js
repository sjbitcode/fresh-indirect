import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../actions/cart'
import CartUpdate from '../components/CartUpdate'


const ProductList = (props) => {
  console.log(props)
  const { products, addToCart } = props
  return (
    <ul style={{ listStyleType: 'none', padding: '0px' }}>
      {
        Object.keys(products).map(key =>
          <li key={key}>
            <h2>{products[key].name}</h2>
            <img src={products[key].imageUrl} alt={products[key].name} />
            <strong>{products[key].price}</strong>
            <CartUpdate product={products[key]} productId={key} addItem={addToCart} />
          </li>
        )
      }
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  ...ownProps
})

const mapDispatchToProps = {addToCart}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)