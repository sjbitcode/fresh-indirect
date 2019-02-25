import React from 'react'
import { connect } from 'react-redux'
import CartTotalTest from '../components/CartTotalTest'
import { updateCartTotal } from '../actions/cart'

const Test = (props) => {
  console.log('TEST PROPS ARE', props)
  return (
    <div>
      Hello
      <h2>{props.cart.total}</h2>
      <CartTotalTest updateCartTotal={props.updateCartTotal}/>
      {/* <button onClick={() => props.dispatch(updateCartTotal())}>update total</button> */}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart,
  ...ownProps
})

// const mapDispatchToProps = dispatch => {
//   return {
//     incrementCart: () => dispatch(updateCartTotal())
//   }
// }
const mapDispatchToProps = {
  updateCartTotal
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
// export default connect(mapStateToProps)(Test)
// export default connect()(Test)