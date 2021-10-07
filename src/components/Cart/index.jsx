import React, { useEffect, useState } from 'react'
import { useCartStore } from '../../context/Store'
import { ModalComponent, ProductInCart } from '..';
import styles from './index.module.css'
const Cart = () => {
  const [cartState] = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { products } = cartState

  useEffect(() => {
    let calculatedPrice = 0
    for (const prod of products) {
      calculatedPrice += prod.price
    }
    setTotalPrice(calculatedPrice.toFixed(2))
  }, [products]);


  return products && (
    <div className={styles.cartMainContainer}>
      <button className={styles.buttonCart} onClick={e => {
        setIsOpenModal(true);
      }}>View Order  ${
          totalPrice
        }</button>
      <ModalComponent
        className={styles.generalContainerModal}
        isOpenModal={isOpenModal}
        setShowModal={e => {
          setIsOpenModal(e);
        }}
      >
        <div className={styles.modalContainer}>
          {
            products.length > 0 ? products.map(prod => {
              return <ProductInCart key={prod.id} product={prod} />
            }) : <div className={styles.emptyCart} >Selecciona un producto para agregar a tu carrito</div>
          }
          {products.length > 0 ? <button className={styles.cartButton}>Finalize Order ${parseFloat(totalPrice).toFixed(2)}</button> : ""}
        </div>


      </ModalComponent>
    </div>
  )
}
export default Cart


// {products.map((product, id) => {
//   return <div key={`cartProd${product.id}-${id}`}>{product.id}</div>
// })}