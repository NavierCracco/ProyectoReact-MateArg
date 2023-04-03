import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import styles from "./cartTotal.module.css";

function CartTotal() {
  const { cart, setCart } = useContext(dataContext);
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.comprar}>Comprar</button>
      <div className={styles.containerDerecha}>
        <p className={styles.total}>Total: $ {total}</p>
        <button className={styles.vaciarCarrito} onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
