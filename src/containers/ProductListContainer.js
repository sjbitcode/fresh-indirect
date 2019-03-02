import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import { addToCart } from '../actions/cart'
import AddToCart from '../components/AddToCart'
import { cartQuantity, cartTotal, products } from '../selectors/cart'

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
              <Link href={`/product?id=${key}`}>
                    <div id="product-link">
                      <h2>{products[key].name}</h2>
                      <img src={products[key].imageUrl} alt={products[key].name} />
                    </div>
              </Link>
                <strong>{products[key].price}</strong>
                <AddToCart product={products[key]} productId={key} addToCart={addToCart} />
            </li>
          )
        }
      </ul>

      <style jsx>{`
        ul > li {
          border: 1px solid black;
          margin: 10px 0;
        }

        #product-link {
          cursor: pointer;
        }

        #product-link > img {
          height: 150px;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: products(state),
  cartQuantity: cartQuantity(state),
  total: cartTotal(state)
})

const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)