import React from 'react'
import App, { Container } from 'next/app'
import Navbar from '../components/Navbar'
import items from '../products'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    storeName: "Fresh Indirect",
    cart: {
      items: {
        "YrT8dLMCCuO7EdWEI8pfvPzkKuWXNzyG8bEqVHyY": 2,
        "CVJ9BHrMCV3Dnztepzr4sFHXXbcKRw9Ceb2XyD2K": 1
      },
      total: 0
    },
    products: {...items}
  }

  componentDidMount() {
    // calculate cart total immediately
    this.calculateCartTotals()
  }

  /**
   * Calculate cart total.
   * Total is derived from item quantities and item prices from the cart.
  */
  calculateCartTotals = () => {
    let newTotal = 0

    // Multiply each item's quantity in cart by product price.
    Object.keys(this.state.cart.items).map(key => {
      let price = this.state.products[key].price
      let quantity = this.state.cart.items[key]
      newTotal += price * quantity
    })

    // Update state with new total.
    this.setState({
      ...this.state,
      cart: {
        ...this.state.cart,
        total: newTotal
      }
    })
  }

  /**
  * Removes a product to cart.
  * Product is resolved from the given product ID.
  * We assume that any ID that is received will return a product from the state.
  * @param {string} productId
  */
  removeItem = (productId) => {
    let {items} = this.state.cart

    if (productId in items) {

      if (items[productId] > 1) {
        items[productId] -= 1
      }
      else {
        // delete item entirely if quantity equal to 1.
        delete items[productId]
      }

      // Update state's cart items and total.
      this.setState({
        ...this.state,
        cart: {
          ...this.state.cart,
          items: items
        }
      }, () => {
        this.calculateCartTotals()
      })
    }
  }


  /**
   * Adds a product to cart.
   * Product is resolved from the given product ID.
   * We assume that any ID that is received will return a product from the state.
  * @param {string} productId
  */
  addItem = (productId, quantity) => {
    const product = this.state.products[productId]
    let newAmount = quantity

    // If the product exists in the cart, then
    // increment the existing quantity by quantity.
    if (productId in this.state.cart.items) {
      newAmount = this.state.cart.items[productId] + quantity
    }

    // Update state's cart items and total.
    this.setState({
      ...this.state,
      cart: {
        ...this.state.cart,
        items: {
          ...this.state.cart.items,
          [productId]: newAmount
        }
      },
    }, () => {
      this.calculateCartTotals()
    });
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Navbar storeName={this.state.storeName} />
        <Component {...pageProps} {...this.state} addItem={this.addItem} />
      </Container>
    )
  }
}
