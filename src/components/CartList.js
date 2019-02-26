import React from 'react'

class CartList extends React.Component {
  render() {
    console.log(this.props)
    const { items, products } = this.props
    return (
      <div>
        {Object.keys(items).map(key =>
          <div className="cart-product" key={key}>

            <img className="cart-product-img" src={products[key].imageUrl} />

            <p className="cart-product-name" key={key}>
              {products[key].name}
            </p>

            <p className="cart-product-price">
              {products[key].price}
            </p>

            <strong className="cart-product-quantity">
              {items[key]}
            </strong>

            <p className="cart-product-total">
              Individual item total - ${items[key] * products[key].price}
            </p>
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
    )
  }
}

export default CartList