import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import db from "../../db/firebase-config";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const productosRef = collection(db, "productos");
  const [cart, setCart] = useState([]);

  const getProductos = async () => {
    const productosCollection = await getDocs(productosRef);
    const productos = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(productos);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const sumarCarrito = (producto) => {
    const productoCantidad = cart.find((item) => item.id == producto.id);

    if (productoCantidad) {
      setCart(
        cart.map((item) =>
          item.id == producto.id
            ? { ...producto, cantidad: productoCantidad.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, producto]);
    }
  };

  const eliminarProducto = (id) => {
    const idEncontardo = cart.find((item) => item.id == id);

    const productoEliminado = cart.filter((item) => {
      return item !== idEncontardo;
    });
    setCart(productoEliminado);
  };
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <dataContext.Provider
      value={{
        productos,
        setProductos,
        cart,
        setCart,
        sumarCarrito,
        eliminarProducto,
        vaciarCarrito,
        total,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export { DataProvider, dataContext };
