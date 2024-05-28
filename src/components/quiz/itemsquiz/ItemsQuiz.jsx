import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ItemsQuiz.module.css'
import questions from '../../../assets/data/quizFungus'
import ItemQuiz from './itemquiz/ItemQuiz'
import ResultQuiz from '../resultQuiz/ResultQuiz'
import { countScore } from '../../../redux/slices/quizSlice'

const ItemsQuiz = () => {
  const dispatch = useDispatch()
  const totalScore = useSelector((state) => state.quiz.totalScore)
  const [showFinishMessage, setShowFinishMessage] = useState(false)

  // номер вопроса получаемый из id
  const [numQuestion, setNumQuestion] = useState(1)
  // текущий вопрос
  // const [currentQuestion, setCurrentQuestion] = useState()

  // функция для перехода к следующему вопросу
  const goNextQuestion = (numberQuestion) => {
    setNumQuestion(numberQuestion + 1)
  }

  // считаем очки и сортируем ответы по массивам с верными \ неверными ответами
  const countingScore = (score) => {
    dispatch(countScore(score))
  }

  useEffect(() => {
    if (numQuestion > 12) {
      setShowFinishMessage(true)
    }
    setNumQuestion(numQuestion)
  }, [numQuestion])

  return (
    <section className={styles.section}>
      {numQuestion > 12 && <ResultQuiz />}
      {questions.map((question) => {
        return (
          <ItemQuiz
            key={question.id}
            id={numQuestion}
            item={question}
            nextQuestion={goNextQuestion}
            getScore={countingScore}
          />
        )
      })}
    </section>
  )
}

export default ItemsQuiz
