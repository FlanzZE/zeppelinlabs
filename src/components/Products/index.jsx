import React from 'react'
import { products } from './../../functions/constants'
import { Product } from '..';

import styles from './index.module.css'
const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div >
        <h1 className={styles.catTitle}>Combos</h1>
        <Product products={products.filter(p => p.type === "Combo")}></Product>
      </div>
      <div>
        <h1 className={styles.catTitle}>Burguers</h1>
        <Product products={products.filter(p => p.type === "Hamburguesa")}></Product>
      </div>
      <div>
        <h1 className={styles.catTitle}>Other</h1>
        <Product products={products.filter(p => p.type !== "Combo" && p.type !== "Hamburguesa")}></Product>
      </div>
    </div>
  )
}
export default Products