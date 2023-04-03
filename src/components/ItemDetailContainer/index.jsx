// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./itemDetailContainer.module.css"

// const ItemDetailContainer = () => {
//   const[productos, setProductos] = useState([])
//   const { id } = useParams();
//   const producto = productos.find((producto) => producto.id == id);

//   useEffect(() => {
//     axios(`JSON/productos.json`)
//     .then((res) => setProductos(res.data))
//   }, [])
  

//   return(
//     <div className={styles.container}>
//     <img src={`../.${producto.imagen}`} alt={producto.titulo} />
//         <div className={styles.containerDetail}>
//           <h3>{producto.titulo}</h3>
//           <p className={styles.precio}>$ {producto.precio}</p>
//           <button className={styles.btnCard}>Agregar al Carrito</button>
//         </div>   
//     </div>
//   ) 
// }

// export default ItemDetailContainer