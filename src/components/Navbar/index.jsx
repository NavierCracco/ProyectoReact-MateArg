import React from 'react'
import CartWidget from '../CartWidget'
import { IoMdArrowDropdown } from 'react-icons/io';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
          <img src="./img/logo-matearg-white.png" alt="MateArg" />
          <p>MateArg</p>
        </div>
        <div className='navbar-sections'>
          <button>Inicio</button>
          <button>Productos <IoMdArrowDropdown /></button>
          <button>Ayuda</button>
        </div>
        <div className='navbar-cart'>
            <CartWidget text="1"/>
        </div>
    </nav>
  )
}

export default Navbar