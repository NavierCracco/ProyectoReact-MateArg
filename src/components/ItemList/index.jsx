import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../Card';
import styles from "./itemlist.module.css"

const ItemList = ({ productos }) => {
  return (
    <div className={styles.container}>
    {productos.map((producto) => {
      return (
        <NavLink key={producto.id} to={`./productos/${producto.id}`}>
          <Card
            imagen={producto.imagen}
            titulo={producto.titulo}
            precio={producto.precio} />
        </NavLink>
      );
    })}
  </div>
  )
}

export default ItemList