import React from 'react'
import { GiHealing } from 'react-icons/gi'
import { GiBoots } from 'react-icons/gi'
import SelfTreatment from './selfTreatment/SelfTreatment'
import styles from './Treatment.module.css'

const Treatment = () => {
  return (
    <div className={styles.treatment}>
      <h3 className={styles.title}>Лечение</h3>
      <ul className={styles.items}>
        <li className={styles.item}> 
          <span className={styles.text}>
            Обратиться к варчу-дерматологу или подологу
          </span>
          <div className={styles.icon_wrap}>
            <GiHealing size={40} className={styles.icon} />
          </div>
        </li> 
        <li className={styles.item}>
          <span className={styles.text}>
            Аккуратно выполнять назначенную индивидульную
            противогрибковую терапию
          </span>
          <div className={styles.icon_wrap}>
            <GiBoots size={40} className={styles.icon} />
          </div>
        </li>
      </ul>
      <SelfTreatment />
    </div>
  )
}

export default Treatment
