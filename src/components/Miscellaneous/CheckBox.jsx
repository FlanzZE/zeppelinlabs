import React from 'react'
import styles from './CheckBox.module.css'
import { arrayOf, string } from 'prop-types'
const CheckBox = ({ selected, elements, name }) => {
  return (
    <>
      {elements.map(
        (element) => {
          const isSelected = selected?.indexOf(element) > -1 || false
          return <label className={styles.container}>
            {element}
            {selected?.length > 0 ?
              <input disabled checked={isSelected} name={name} value={`${element}`} type="checkbox" />
              : <input name={name} value={`${element}`} type="checkbox" />
            }
            <span className={styles.checkmark}></span>
          </label>
        }
      )}
    </>
  )
}
export default CheckBox

CheckBox.propTypes = {
  selected: arrayOf(string)
}
CheckBox.defaultProps = {
  selected: []
}

// return <label className={styles.container}>
//   {element}
