import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TbHelpOctagonFilled } from 'react-icons/tb'
import { useSelector } from 'react-redux'

import styles from './Doctor.module.css'
import Form from '../form/Form'

const Doctor = () => {
  const name = useSelector(state => state.doctor.name)
  const photo = useSelector(state => state.doctor.photo)
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm((prev) => !prev)
  }

  const navigate = useNavigate()
  return (
    <div className={styles.section_doctor}> 
      <h2 className={styles.title}>
        Задать вопрос специалисту подологу
      </h2>
      <div className={styles.info_wrap}>
        <div
          className={styles.about}
          onClick={() => navigate('/profile')}
        >
          <h3 className={styles.subtitle}>{name}</h3>
          <div className={styles.photo_wrap}>
            <img
              src={photo}
              alt="фото докторра подолога"
              className={styles.photo}
            />
          </div>
        </div>
        <div className={styles.consultation}>
          {!showForm && (
            <button className={styles.btn} onClick={handleClick}>
              <div className={styles.icon_wrap}>
                <TbHelpOctagonFilled size={50} className={styles.icon} />
              </div>
              <p>получить консультацию</p>
            </button>
          )}

          {showForm && (
            <Form showBtnClose={showForm} setClose={setShowForm} isWhite={true}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctor
