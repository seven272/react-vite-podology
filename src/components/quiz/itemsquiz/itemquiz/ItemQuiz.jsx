import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { countScore } from '../../../../redux/slices/quizSlice'
import styles from './ItemQuiz.module.css'
import Button from '../../../../UI/button/Button'
import Radio from '../../../../UI/radio/Radio'
import Checkbox from '../../../../UI/checkbox/Checkbox'

const ItemQuiz = ({ id, item, nextQuestion, getScore }) => {
  const dispatch = useDispatch()
  const [scoreAnswer, setScoreAnswer] = useState(0)

  // присваиваем очки за выбранный ответ Radio
  const handleScoreRadio = (elem) => {
    setScoreAnswer(elem.score)
  }

  // присваиваем очки за выбранный ответ Checkbox
  const handleScoreCheckbox = (elem) => {
    setScoreAnswer(scoreAnswer + elem.score)
  }
  // передаем пропсы в родитель
  const handleAnswer = () => {
    nextQuestion(item.id)
    getScore(scoreAnswer)
  }

  return (
    <>
      {id === item.id && (
        <form
          action="submit"
          className={styles.form}
          onSubmit={(evt) => evt.preventDefault()}
        >
          <span className={styles.title}>{item.id}</span>
          <span className={styles.subtitle}>{item.title}</span>
          <ul className={styles.questions}>
            {item.options.map((elem) => {
              return (
                <li key={elem.id} className={styles.question}>
                  {/* <div className={styles.wrap_input}> */}
                    {elem.input === 'radio' ? (
                      <Radio
                        text={elem.title}
                        id={elem.id}
                        val={elem.title}
                        changed={() => handleScoreRadio(elem)}
                      />
                    ) : (
                      <Checkbox
                        label={elem.title}
                        id={elem.id}
                        value={elem.isChecked}
                        changed={() => handleScoreCheckbox(elem)}
                      />
                    )}
                  {/* </div> */}
                </li>
              )
            })}
          </ul>
          <Button classBtn="button" clickBtn={handleAnswer}>
            Выбрать
          </Button>
        </form>
      )}
    </>
  )
}

export default ItemQuiz
