import React from 'react'
// import { TbReportMedical } from 'react-icons/gi'
import { TbReportMedical } from 'react-icons/tb'
import styles from './Prevention.module.css'
const Prevention = () => {
  return (
    <div className={styles.prevention}>
      <h3 className={styles.title}>Профилактика</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Носить подходящую по размеру обувь
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} /> 
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Следить за гигиеной рук и ног
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Не носить и не мерить чужую обувь
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} />
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Не ходить босиком в общественных местах (раздевалки,
              бани, сауны)
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Использовать подследники или носки во время примерки
              обуви в магазине
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <span className={styles.text}>
              Обрабатывать личную обувь, а также кожу стоп и ногти
              противогрибковыми препаратами
            </span>
            <div className={styles.icon}>
              <TbReportMedical size={30} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Prevention
