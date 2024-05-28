import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
const Menu = () => {
  return (
    <ul className={styles.section_menu}>
      <li className={styles.item}>
        <NavLink className={styles.item_href} to="/">Главная</NavLink>
      </li>
      <li>
        <NavLink className={styles.item_href} to="/quiz">Тест на грибок</NavLink>
      </li>
      <li>
        <NavLink className={styles.item_href} to="/profile">Подолог</NavLink>
      </li>
    </ul>
  )
}

export default Menu
