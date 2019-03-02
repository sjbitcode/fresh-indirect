import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'
import AddToCart from '../components/AddToCart'

class ProductDetailContainer extends React.Component {
  render() {
    const { product, id } = this.props
    return (
      <div>
        <h2>{product.name}</h2>
        <h4>{product.description}</h4>
        <img src={product.imageUrl} alt={product.name} />
        <strong>{product.price}</strong>
        <AddToCart product={product} productId={id} addToCart={addToCart} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  product: state.products[props.productId]
})

const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)