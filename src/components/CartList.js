import React from 'react'

import DeleteFromCart from './DeleteFromCart'
import CartUpdate from './CartUpdate'

class CartList extends React.Component {
  render() {
    const { items, products, setQuantity, removeFromCart } = this.props
    return (
      <div>
        {Object.keys(items).map(key =>
          <div className="cart-product" key={key}>

            <img className="cart-product-img" src={products[key].imageUrl} />

            <p className="cart-product-name" key={key}>
              {products[key].name}
            </p>

            <div>
              <span className="cart-total-price">
                ${items[key] * products[key].price}
              </span>
              <br/>
              <span className="cart-product-price">
                {products[key].price}/ea
              </span>
            </div>

            <CartUpdate price={products[key].price} quantity={items[key]} setQuantity={setQuantity} productId={key}/>
            <DeleteFromCart removeFromCart={removeFromCart} productId={key}/>
          </div>
        )}

        <style jsx>{`
          .cart-product {
            border: 1px solid black;
          }

          .cart-product-img {
            width: 70px;
            height: 70px;
          }

          .cart-product-name {
            display: inline-block;
            margin: 0 20px 0 20px;
          }

          .cart-total-price {
            font-size: 20px;
          }

          .cart-product-price {
            color: red;
          }

          cart-product-quantity {
            margin: 0 20px 0 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default CartList