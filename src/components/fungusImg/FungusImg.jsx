import React from 'react'

import styles from './FungusImg.module.css'
import picture from '../../assets/images/gribok.png'

const FungusImg = () => {
  return (
    <div className={styles.fungus_img}>
      <img
        className={styles.img}
        src={picture}
        alt="грибок главное изображение"
      />
      {/* <div className={styles.cart}>
        диагноз
      </div> */}
    </div>
  )
}

export default FungusImg
