import React, { useState, useEffect } from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { HiChevronDoubleDown } from 'react-icons/hi'

import styles from './ItemTreatment.module.css'

const ItemTreatment = ({ data }) => {
  const [showDescr, setShowDescr] = useState(false)
  const handleShowDescr = () => {
    setShowDescr(!showDescr)
  }
  return (
    <>
      <div className={styles.title_wrapper} onClick={handleShowDescr}>
        {showDescr ? (
          <HiChevronDoubleDown size={20} />
        ) : (
          <HiChevronDoubleRight size={20} />
        )}
        <span className={styles.title}>{data.title}</span>
      </div>

      {showDescr && (
        <span className={styles.descr}>{data.descr}</span>
      )}
    </>
  )
}

export default ItemTreatment
