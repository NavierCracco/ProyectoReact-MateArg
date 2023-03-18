import { useParams } from "react-router-dom"

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);

  return(
    <div>
      <h3>{producto.tiulo}</h3>
      <img src={producto.imagen} alt="" />
    </div>
  ) 
}

export default ItemDetail