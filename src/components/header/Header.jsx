import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHandHoldingHeart } from 'react-icons/fa'

import styles from './Header.module.css'
import Contact from './contact/Contact'
import Menu from './menu/Menu'

const Header = () => { 
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <span className={styles.title} onClick={() => navigate('/')}>
        <FaHandHoldingHeart size={50} /> <span className={styles.title_bold}>Грибок</span> ногтей
      </span>
      <Menu />
      <Contact />
    </div>
  )
}

export default Header
