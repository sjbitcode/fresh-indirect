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

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Navbar storeName={this.state.storeName}/>
        <Component {...pageProps} {...this.state} />
      </Container>
    )
  }
}
