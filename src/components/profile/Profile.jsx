import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './Profile.module.css'
import photoProfile from '../../assets/images/doctor.webp'
import diplomImg1 from '../../assets/images/diplom1.jpg'
import diplomImg2 from '../../assets/images/diplom2.jpg'
import Form from '../form/Form'

const Profile = () => {
  const navigate = useNavigate()
  const name = useSelector(state => state.doctor.name)
  const photo = useSelector(state => state.doctor.photo)
  const job = useSelector(state => state.doctor.job)
  return (
    <div className={styles.section_profile}>
      <div className={styles.btn_back} onClick={() => navigate('/')}>
        <GoArrowLeft size={20} />
        <span>вернуться назад</span>
      </div>
      <div className={styles.photo_wrap}>
        <img
          src={photo}
          alt="фото докторра подолога"
          className={styles.photo}
        />
      </div>
      <div className={styles.content_wrap}>
        <span className={styles.title}>{name}</span>
        <span className={styles.subtitle}>{job}</span>
        <div className={styles.items}>
          <h3 className={styles.subtitle}>
            Профессиональные достижения
          </h3>
          <span className={styles.item}>
            Техника обработки бородавок, мозолей, работа с
            онихомикозом, гипергидрозом и др. Для изучения этих
            направлений работы в наших обучающих программах
            предусмотрены различные интенсивы.
          </span>
          <span className={styles.item}>
            Техника обработки бородавок, мозолей, работа с
            онихомикозом, гипергидрозом и др. Для изучения этих
            направлений работы в наших обучающих программах
            предусмотрены различные интенсивы.
          </span>
          <span className={styles.item}>
            Техника обработки бородавок, мозолей, работа с
            онихомикозом, гипергидрозом и др. Для изучения этих
            направлений работы в наших обучающих программах
            предусмотрены различные интенсивы.
          </span>
        </div>
        <Form />
      </div>
      <div className={styles.diploms}>
        <div className={styles.diplom_wrap}>
          <img
            className={styles.diplom_img}
            src={diplomImg1}
            alt="diplom podologa"
          />
        </div>
        <div className={styles.diplom_wrap}>
          <img
            className={styles.diplom_img}
            src={diplomImg2}
            alt="diplom podologa"
          />
        </div>
        <div className={styles.diplom_wrap}>
          <img
            className={styles.diplom_img}
            src={diplomImg1}
            alt="diplom podologa"
          />
        </div>
        <div className={styles.diplom_wrap}>
          <img
            className={styles.diplom_img}
            src={diplomImg2}
            alt="diplom podologa"
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
