import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import App, { Container } from 'next/app'
import Navbar from '../components/Navbar'
import createReduxStore from '../store'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    storeName: "Freshly Supermarket"
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Navbar storeName={this.state.storeName} />
          <Component {...pageProps} {...this.state} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createReduxStore)(MyApp)
