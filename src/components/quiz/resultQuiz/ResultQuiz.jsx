import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import textResult from '../../../assets/data/results'
import styles from './ResultQuiz.module.css'

const ResultQuiz = () => {
  const score = useSelector((state) => state.quiz.totalScore)

  const [resultMessage, setResultMessage] = useState('')

  useEffect(() => {
    if (score === 0 || score <= 3) {
      setResultMessage(textResult[0].message)
    } else if (score > 3 && score < 10) {
      setResultMessage(textResult[1].message)
    } else if (score >= 10 && score < 30) {
      setResultMessage(textResult[2].message)
    } else if (score > 30) {
      setResultMessage(textResult[3].message)
    }
  }, [score])

  return (
    <div className={styles.section_result}>
      <span className={styles.subtitle}>
        Вы набрали {score} баллов
      </span>
      <span className={styles.descr}>{resultMessage}</span>
    </div>
  )
}

export default ResultQuiz
