import React from 'react'

const DeleteCartItem = (props) => {
  const { productId, removeFromCart } = props

  return (
    <div>
      <button onClick={(e) => {removeFromCart(productId)}}>Delete</button>

      <style jsx>{`
        button {
          background-color: white;
          border-radius: 5px;
          border: 3px #4CAF50 solid;
          color: black;
          padding: 10px 15px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default DeleteCartItem