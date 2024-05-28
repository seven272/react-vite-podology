import React from 'react'
import { FaHandPaper } from 'react-icons/fa'

import styles from './Symptoms.module.css'

const Symptoms = () => {
  return (
    <div className={styles.symptoms}>
      <span className={styles.title}>Симптомы</span>
      <ul className={styles.items}>
        <li className={styles.item}>
          <div className={styles.content_wrap}>
            <span className={styles.text}>Ломкость ногтя</span>
            <div className={styles.icon_wrap}>
              <FaHandPaper size={40} className={styles.icon} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>Истонченность ногтя</span>
            <div className={styles.icon_wrap}>
              <FaHandPaper size={40} className={styles.icon} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Массивность(утолщение) ногтя
            </span>
            <div className={styles.icon_wrap}>
              <FaHandPaper size={40} className={styles.icon} />
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.content_wrap}>
            <span className={styles.text}>Изменение цвета ногтя</span>
            <div className={styles.icon_wrap}>
              <FaHandPaper size={40} className={styles.icon} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Пятна или полоски на ногте
            </span>
            <div className={styles.icon_wrap}>
              <FaHandPaper size={40} className={styles.icon} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Symptoms
