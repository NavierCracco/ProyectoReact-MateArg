import { createContext, useState } from "react";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  return (
    <dataContext.Provider
      value={{ cart, setCart, sumarCarrito, eliminarProducto }}
    >
      {children}
    </dataContext.Provider>
  );
};

export { DataProvider, dataContext };
