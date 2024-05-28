import React from 'react'
import { GiHealing } from 'react-icons/gi'
import { GiBoots } from 'react-icons/gi'

import styles from './Reasons.module.css'

const Reasons = () => {
  return (
    <div className={styles.reasons}>
      <h3 className={styles.title}>Причины</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={styles.text}>
            Ослабленная иммунная система
          </span>
          <div className={styles.icon_wrap}>
            <GiHealing size={40} className={styles.icon} />
          </div>
        </li>
        <li className={styles.item}>
          <span className={styles.text}>
            Общая обувь и предметы обихода
          </span>
          <div className={styles.icon_wrap}>
            <GiBoots size={40} className={styles.icon} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Reasons
