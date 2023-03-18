import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("./JSON/productos.json")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ItemList productos={productos}/>
  );
}

export default ItemListContainer