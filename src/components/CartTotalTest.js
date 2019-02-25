import React from 'react'

const CartTotalTest = props => {
  console.log('DA PROPS ARE', props)
  return (
    <div>
      Update the total:
      <button onClick={() => { props.updateCartTotal()}}>Click me to update</button>
    </div>
  )
}

export default CartTotalTest