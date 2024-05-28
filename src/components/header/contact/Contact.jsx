import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './Contact.module.css' 

const Contact = () => {
  const navigate = useNavigate()
  const name = useSelector(state => state.doctor.name)
  const photo = useSelector(state => state.doctor.photo)
  const job = useSelector(state => state.doctor.job)
  return (
    <div className={styles.section_contact}>
      <div className={styles.photo_wrap}>
        <img
          src={photo}
          alt="фото докторра подолога"
          className={styles.photo}
        />
      </div>
      <div className={styles.content_wrap}>
        <span className={styles.text}>{job}</span>
        <span className={styles.text}>{name}</span>
        <button className={styles.btn} onClick={() => navigate('/profile')}>
          получить консультацию
        </button>
      </div>
    </div>
  )
}

export default Contact
