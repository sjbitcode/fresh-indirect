import React from 'react'
import { toCurrency } from '../helpers'

const MAX = 99

class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      total: 0,
      min: 0,
      max: 99,
      default: 1
    }
  }

  componentWillMount() {
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

    // validate input value
    let val = parseInt(e.target.value)
    let re = RegExp('^[0-9]*$')

    re.test(val) ? this.validateInput(val) : this.validateInput('')
  }

  validateInput = (val) => {
    let { min, max } = this.state

    if (val < min) {
      val = min
    }
    else if (val > max) {
      val = max
    }

    this.setState({
      quantity: val,
      total: val * this.props.product.price
    })
  }

  addToCart = (e) => {
    e.preventDefault()
    this.props.addToCart(
      this.props.productId,
      this.state.quantity,
      this.state.total
    )
  }

  inputBlur = (e) => {
    e.preventDefault()

    // set value to default if input is empty or whitespace
    let val = e.target.value
    if (val === '' || val === ' ') {
      this.validateInput(this.state.default)
    }
  }

  render() {
    return (
      <div>
        <form className='qtyInput'>
          <button onClick={(e) => this.decrementQty(e)}>-</button>
          <input type="number" value={this.state.quantity} onChange={this.handleChange} onBlur={this.inputBlur}/>
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

export default AddToCart