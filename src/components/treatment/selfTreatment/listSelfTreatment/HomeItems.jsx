import React  from 'react'
import styles from './ListSelfTreatment.module.css'
import ItemTreatment from './itemTreatment/ItemTreatment'
const HomeItems = ({items}) => {

  return (
    <ul className={styles.items}>
      {items.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <ItemTreatment data={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default HomeItems