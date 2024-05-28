import React from 'react'
import { useSelector } from 'react-redux'

import ItemsQuiz from './itemsquiz/ItemsQuiz'
import AgeAndMale from './ageandmale/AgeAndMale'
import styles from './Quiz.module.css'

const Quiz = () => {
  const age = useSelector((state) => state.quiz.age)
  const male = useSelector((state) => state.quiz.male)
  return (
    <div className={styles.quiz}>
      <h2 className={styles.title}>Тест на определение грибка</h2>
      <AgeAndMale />
      {age && male ? (
        <ItemsQuiz />
      ) : (
        <span className={styles.fish}>Чтобы начать прохождение теста укажите пол и возраст</span>
      )}
    </div>
  )
}

export default Quiz
