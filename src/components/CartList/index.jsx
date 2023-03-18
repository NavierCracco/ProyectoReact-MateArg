import { FaTrashAlt } from 'react-icons/fa';
import styles from "./cartlist.module.css"

function CartList() {
  return (
    <div className={styles.border}>
        <div className={styles.container}>
            <h2>Cart List</h2>
            <div className={styles.productos}>
                <img src="./img/mate-imperial-marron3.jpg" alt="" />
                <p>1</p>
                <p className={styles.titulo}>Mate Imperial Marron</p>
                <FaTrashAlt />
            </div>
            <div className={styles.productos}>
                <img src="./img/termo-stanley-verde.jpg" alt="" />
                <p>2</p>
                <p className={styles.titulo}>Termo Stanley Verde</p>
                <FaTrashAlt />
            </div>
        </div>
    </div>
  )
}

export default CartList