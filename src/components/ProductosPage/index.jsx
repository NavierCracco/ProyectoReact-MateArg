import React from 'react'
import ItemList from '../ItemList'
import styles from "./productos.module.css"

function ProductosPage({ productos }) {
  return (
    <div className={styles.main}>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ProductosPage