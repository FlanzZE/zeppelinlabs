import React, { useState } from 'react'
import { arrayOf, shape } from 'prop-types'
import { ModalComponent, ProductDetail } from '..';
import styles from './index.module.css'
import styled from 'styled-components'
const Image = styled.div`
  background-image:url(${props => props.img});
`
const Product = ({ products }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProd, setSelectedProd] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenModal(true)
    const indexProd = event.target.indexProd.value;
    setSelectedProd(indexProd)
  };

  return (
    <div className={styles.catProdsContainer}>
      {products.map((product, index) => {
        return (
          <div
            className={styles.productContainer}
            key={product.name + product.id}>
            <Image
              img={product.img}
              className={styles.imgProduct}
            />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <input type="hidden" name="indexProd" value={index} />
              <div className={styles.priceContainer}>${product.price}</div>
              <input type="submit" value="Select" />
            </form>
            <div>
            </div>
          </div>
        )
      })}
      <ModalComponent
        className={styles.generalContainerModal}
        isOpenModal={isOpenModal}
        setShowModal={e => {
          setIsOpenModal(e);
        }}
      >

        <ProductDetail closeModal={setIsOpenModal} product={products[selectedProd]} />

      </ModalComponent>
    </div>
  )
}

Product.propTypes = {
  products: arrayOf(shape).isRequired
}
export default Product