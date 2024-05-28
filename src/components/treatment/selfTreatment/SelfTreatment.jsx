import React, { useState, useEffect } from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { HiChevronDoubleDown } from 'react-icons/hi'
import {
  homeTreatment,
  diet,
  pharmacy,
} from '../../../assets/data/info'
import styles from './SelfTreatment.module.css'
import HomeItems from './listSelfTreatment/HomeItems'
import DietItems from './listSelfTreatment/DietItems'
import PharmacyItems from './listSelfTreatment/PharmacyItems'

const SelfTreatment = () => {
  const [activeSection, setActiveSection] = useState({
    keyDiet: false,
    keyHome: false,
    keyPharmacy: false,
  })

  const handleActiveSection = (value) => {
    if (value === 'diet') {
      setActiveSection({
        ...activeSection,
        keyDiet: !activeSection.keyDiet,
      })
    } else if (value === 'home') {
      setActiveSection({
        ...activeSection,
        keyHome: !activeSection.keyHome,
      })
    } else if (value === 'pharmacy') {
      console.log('hui rharm')
      setActiveSection({
        ...activeSection,
        keyPharmacy: !activeSection.keyPharmacy,
      })
    }
  }

  return (
    <div className={styles.section}>
      <ul className={styles.items}>
        <li
          className={styles.item}
          onClick={() => handleActiveSection('diet')}
        >
          {activeSection.keyDiet ? (
            <HiChevronDoubleDown size={25} />
          ) : (
            <HiChevronDoubleRight size={25} />
          )}
          <span className={styles.title}>Питание</span>
        </li>

        <li
          className={styles.item}
          onClick={() => handleActiveSection('home')}
        >
          {activeSection.keyHome ? (
            <HiChevronDoubleDown size={25} />
          ) : (
            <HiChevronDoubleRight size={25} />
          )}
          <span className={styles.title}>Лечение дома</span>
        </li>

        <li
          className={styles.item}
          onClick={() => handleActiveSection('pharmacy')}
        >
          {activeSection.keyPharmacy ? (
            <HiChevronDoubleDown size={25} />
          ) : (
            <HiChevronDoubleRight size={25} />
          )}
          <span className={styles.title}>Фармакология</span>
        </li>
      </ul>

      <ul className={styles.items_2}>
        {activeSection.keyDiet ? (
          <li className={styles.item_2}> 
            <DietItems items={diet} />
          </li>
        ) : (
          <li className={styles.item_2}></li>
        )}

        {activeSection.keyHome ? (
          <li className={styles.item_2}>
            <HomeItems items={homeTreatment} />
          </li>
        ) : (
          <li className={styles.item_2}></li>
        )}

        {activeSection.keyPharmacy ? (
          <li className={styles.item_2}>
            <PharmacyItems items={pharmacy} />
          </li>
        ) : (
          <li className={styles.item_2}></li>
        )}
      </ul>
    </div>
  )
}

export default SelfTreatment
