import React, { useState } from 'react'
import { CheckBox, RadioButtonGroup } from '..'
import styles from './index.module.css'
import { useCartStore } from '../../context/Store'
import { setProducts } from '../../context/CartReducer';
import styled from 'styled-components'
const Image = styled.div`
  background-image:url(${props => props.img});
`
const Index = ({ closeModal, product }) => {
  const [cartState, dispatch] = useCartStore();
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  function handleSubmit(event) {
    event.preventDefault()

    const size = event.target.size.value
    const soda = event.target.soda.value
    if (!size || !soda) {
      alert("Por favor selecciona tamaño y sabor de soda")
      return false
    }
    let toppings = []
    for (let topping of event.target.toppings) {
      if (topping.checked) {
        toppings.push(topping.value)
      }
    }
    dispatch(setProducts(
      {
        id: product.id,
        size,
        soda,
        toppings,
        price: calculatedPrice
      }))
    alert("Producto agregado exitosamente")
    closeModal(false)
  }
  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}
      onChange={e => {
        if (e.target.name === "size") {
          if (e.target.value !== "Small") {
            setCalculatedPrice(product.price + 2)
          }
          else {
            setCalculatedPrice(product.price)
          }

        }

      }}
    >
      <div className={styles.descriptionContainer}>
        <Image className={styles.productImage} img={product.img} />
        <div>
          <h1>
            {product.title}
          </h1>
        </div>
      </div>
      <div className={styles.toppicsContainer}>
        <div>
          <h2>Size</h2>
          <RadioButtonGroup name="size" elements={["Small", "Big(+$2,00)"]} />
        </div>
        <div>
          <h2>Soda flavor</h2>
          <RadioButtonGroup name="soda" elements={["Cola", "Lemon", "Grapefruit", "Water", "Orange"]} />
        </div>
        <div style={{ width: "100%" }} >
          <h2>Toppings</h2>
          <CheckBox name="toppings" elements={["Mayonnaise", "Ketchup", "Lettuce", "Tomato", "Pickles", "Onion", "Bread"]} />
        </div>


      </div>
      <div className={styles.toppicsContainer}>
        <input type="submit" value={`Add to my order $${calculatedPrice.toFixed(2)}`} >

        </input>
      </div>
    </form>
  )
}
export default Index