import Button from "../Button"
import styles from "./card.module.css"

const Card = ({ producto }) => {
  return (
    <div className={styles.card}>
        <img src={producto.imagen} alt={producto.titulo} />
        <div className={styles.productoInfo}>
            <h3>{producto.titulo}</h3>
            <p className={styles.price}>{`$ ${producto.precio}`}</p>
            <Button text={"Agregar al Carrito"}/>
        </div>   
    </div>
)
}

export default Card