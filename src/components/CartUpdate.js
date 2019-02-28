import React from 'react'

function debounce(a, b, c) { var d, e; return function () { function h() { d = null, c || (e = a.apply(f, g)) } var f = this, g = arguments; return clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e } }

class CartUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      default: 1,
      min: 0,
      max: 99
    }
  }

  componentWillMount() {
    this.setState({
      quantity: this.props.quantity
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
      quantity: val
    })

    this.updateItemQuantity()
  }

  inputBlur = (e) => {
    e.preventDefault()

    // set value to default if input is empty or whitespace
    let val = e.target.value
    if (val === '' || val === ' ') {
      this.validateInput(this.state.default)
    }
  }

  setToOne = () => {
    // set quantity to default if no value in focused input
    if (this.state.quantity < this.state.default) {
      this.setState({
        quantity: this.state.default
      })
    }
  }

  updateItemQuantity = debounce(() => {
    this.setToOne()
    this.props.setQuantity(this.props.productId, this.state.quantity)
  }, 1000)

  render() {
    return (
      <div>
        <form className='qtyInput'>
          <button onClick={(e) => this.decrementQty(e)}>-</button>
          <input type="number" value={this.state.quantity} onChange={this.handleChange} onBlur={this.inputBlur}/>
          <button onClick={(e) => this.incrementQty(e)}>+</button>
        </form>

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