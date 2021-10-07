import React from 'react'
import { CheckBox, RadioButtonGroup } from '..'
import styles from './index.module.css'
import { products } from '../../functions/constants'
import { useCartStore } from '../../context/Store'
import { removeProduct } from '../../context/CartReducer';
import styled from 'styled-components'
const Image = styled.div`
  background-image:url(${props => props.img});
`
const Index = ({ product }) => {
  const [cartState, dispatch] = useCartStore();
  const originalProd = products.find(e => e.id === product.id)
  function handleSubmit(e) {
    e.preventDefault()

    dispatch(removeProduct(product))

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.descriptionContainer}>
        <Image className={styles.productImage} img={originalProd.img} />
        <div className={styles.description}>
          <div>
            <h1>
              {originalProd.title}
            </h1>
            <p>{originalProd.description}</p>
          </div>
          <div className={styles.descriptionButtons}>
            <button type="button">${product.price.toFixed(2)}</button>
            <input type="submit" value={`Remove`} />
          </div>
        </div>
      </div>
      <div className={styles.toppicsContainer}>
        {originalProd.type === "Combo" && <>
          <div >
            <h2>Size</h2>
            <div className={styles.toppings}>
              <RadioButtonGroup name="size" elements={["Small", "Big(+$2,00)"]} />
            </div>
          </div>
          <div >
            <h2>Soda flavor</h2>
            <div className={styles.toppings}>
              <RadioButtonGroup name="soda" selected={[product.soda]} elements={["Cola", "Lemon", "Grapefruit", "Water", "Orange"]} />
            </div>
          </div>
        </>}
        <div className={styles.lastToppings} >
          <h2>Toppings</h2>
          <div className={styles.toppings}>
            <CheckBox selected={product.toppings} name="toppings" elements={["Mayonnaise", "Ketchup", "Lettuce", "Tomato", "Pickles", "Onion", "Bread"]} />
          </div>
        </div>
      </div>
    </form>
  )
}
export default Index


