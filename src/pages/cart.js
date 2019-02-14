import React from 'react'

const Cart = ({cart, products}) => (
  <div>
    <h2>
      Currently {Object.keys(cart['items']).length} items in your cart
    </h2>

    {Object.keys(cart['items']).map(key =>
      <div className="cart-product" key={key}>

        <img className="cart-product-img" src={products[key].imageUrl} />

        <p className="cart-product-name" key={key}>
          {products[key].name}
        </p>

        <p className="cart-product-price">
          {products[key].price}
        </p>

        <strong className="cart-product-quantity">
          {cart['items'][key]}
        </strong>
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

      .cart-product-price {
        color: red;
      }

      cart-product-quantity {
        margin: 0 20px 0 20px;
      }
    `}</style>
  </div>
);

export default Cart;
