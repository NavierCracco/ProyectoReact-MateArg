import Button from "../Button"
import styles from "./card.module.css"

const Card = ({ imagen, titulo, precio }) => {
  return (
    <div className={styles.card}>
        <img src={imagen} alt={titulo} />
        <div className={styles.productoInfo}>
            <h3>{titulo}</h3>
            <p className={styles.price}>{`$ ${precio}`}</p>
            <Button text={"Agregar al Carrito"}/>
        </div>   
    </div>
)
}

export default Card