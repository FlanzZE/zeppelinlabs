import React from 'react'
import styles from './RadioButton.module.css'
import { arrayOf, string } from 'prop-types'
const RadioButtonGroup = ({ selected, elements, name }) => {
  return elements && (
    <>
      {elements.map(
        (element) => {
          const isSelected = selected?.indexOf(element) > -1 || false
          return <label className={styles.container}>
            {element}
            {selected.length > 0 ?
              <input disabled checked={isSelected} name={name} value={`${element}`} type="radio" />
              : <input name={name} value={`${element}`} type="radio" />
            }

            <span className={styles.checkmark}></span>
          </label>
        }
      )}

    </>
  )
}
RadioButtonGroup.propTypes = {
  selected: arrayOf(string)
}
RadioButtonGroup.defaultProps = {
  selected: []
}
export default RadioButtonGroup