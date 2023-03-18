import CartWidget from '../CartWidget'
import { IoMdArrowDropdown } from 'react-icons/io';
import styles  from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>
        <NavLink to="/">
          <img src="./img/logo-matearg-white.png" alt="logo" />
        </NavLink>
        <NavLink className={styles.logoTitulo} to="/">
          <p>MateArg</p>
        </NavLink>
        </div>
        <div className={styles.sections}>
          <NavLink className={styles.btn} to="/">Inicio</NavLink>
          <NavLink className={styles.btn} to="/productos">
            Productos <IoMdArrowDropdown className={styles.arrowDown} />
          </NavLink>
          <NavLink className={styles.btn} to="/curatumate">Curá tu Mate</NavLink>
          <NavLink className={styles.btn} to="/contacto">Contacto</NavLink>
        </div>
        <div className={styles.cart}>
          <NavLink to="/carrito"><CartWidget text="3"/></NavLink>
        </div>
    </nav>
  )
}

export default Navbar