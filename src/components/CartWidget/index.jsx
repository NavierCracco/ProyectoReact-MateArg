import styles from './carrito.module.css'
import { BsCart } from 'react-icons/bs';

function CartWidget({ text }) {
    return (
      <button className={styles.carrito}>
        <BsCart /> 
        <p className={styles.numerito}>{text}</p>
      </button>
      )
}

export default CartWidget