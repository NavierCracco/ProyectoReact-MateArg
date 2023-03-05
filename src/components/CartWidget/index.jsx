import React from 'react'
import './carrito.css'
import { BsCart } from 'react-icons/bs';

function CartWidget({ text }) {
    return (
      <button className='carrito'>
        <BsCart /> 
        <p className='numerito'>{text}</p>
      </button>
      )
}

export default CartWidget