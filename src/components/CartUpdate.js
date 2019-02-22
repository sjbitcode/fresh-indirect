import React from 'react'
import { toCurrency } from '../helpers'

const MAX = 99

class CartUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      total: 0
    }
    this.quantityInput = React.createRef()
  }

  componentWillMount() {
    console.log(this.props)
    this.setState({
      total: this.props.product.price
    })
  }

  decrementQty = (e) => {
    e.preventDefault()
    this.validateInput(this.state.quantity - 1)
  }
  
  incrementQty = (e) => {
    e.preventDefault()
    this.validateInput(this.state.quantity + 1)
  }

  handleChange = (e) => {
    e.preventDefault()
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : ""

    console.log(val)
    console.log(typeof(val))

    this.validateInput(val)
  }

  validateInput = (val) => {
    if (val < 0) {
      val = 0
    }
    else if (val > MAX) {
      val = MAX
    }

    this.setState({
      quantity: val,
      total: val * this.props.product.price
    })
  }

  addToCart = (e) => {
    e.preventDefault()
    console.log('Added to cart!')
    console.log('Quantity added to cart: ', this.state.quantity)
    this.props.addItem(this.props.productId, this.state.quantity)
  }

  inputBlur = (e) => {
    // console.log(e)
    // console.log('input Blurred')
    // console.log(e.target.value)
    // console.log(typeof(e.target.value))
    let val = e.target.value
    if (val === '' || val === ' ') {
      e.target.value = '1'
      this.setState({
        quantity: 1
      })
    }
  }

  render() {
    return (
      <div>
        <form className='qtyInput'>
          <button onClick={(e) => this.decrementQty(e)}>-</button>
          <input type="number" min="0" max="100" value={this.state.quantity} onChange={this.handleChange} onBlur={this.inputBlur}/>
          <button onClick={(e) => this.incrementQty(e)}>+</button>
          <input type="submit" value="Add to Cart" onClick={this.addToCart} />
        </form>
        <strong>Total: {toCurrency(this.state.total)}</strong>

        <style jsx>{`
        .qtyInput {
          display: block;
        }

        .qtyInput button {
          color: white;
          background: #4fa157;
          font-size: 18px;
          border-radius: 3px;
          cursor: pointer;
        }

        .qtyInput input {
          border-radius: 3px;
          margin: 0 2px;
          font-size: 18px;
          font-weight: bold;
        }

        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
        }
      `}</style>
      </div>
    )
  }
}

export default CartUpdate