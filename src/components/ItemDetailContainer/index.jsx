import { useParams } from "react-router-dom";
import Button from "../Button";
import styles from "./itemDetailContainer.module.css"

const ItemDetailContainer = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id)
  
  return(
    <div className={styles.container}>
    <img src={`../.${producto.imagen}`} alt={producto.titulo} />
        <div className={styles.containerDetail}>
          <h3>{producto.titulo}</h3>
          <p className={styles.precio}>{`$ ${producto.precio}`}</p>
          <Button text={"Agregar al Carrito"}/>
        </div>   
    </div>
  ) 
}

export default ItemDetailContainer