import React from 'react'
import ItemList from '../ItemList'
import Titulo from '../Titulo'
import styles from "./productos.module.css"

function ProductosPage({ productos }) {
  return (
    <>
    <Titulo titulo={"Productos"}/>
    <div className={styles.main}>
      <ItemList productos={productos}/>
    </div>
    </>
  )
}

export default ProductosPage