import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useInput } from '../../../utils/useValidation'
import { setAge, setMale } from '../../../redux/slices/quizSlice'
import styles from './AgeAndMale.module.css'
import Radio from '../../../UI/radio/Radio'

const AgeAndMale = () => {
  const [ageUser, setAgeUser] = useState('')
  const [maleUser, setMaleUser] = useState('')
  // const age = useSelector((state) => state.quiz.age)
  // хук для валидации поля (проверка на ошибки)
  const validInput = useInput('')
  const dispatch = useDispatch()
  const handleMale = (payload) => {
    setMaleUser(payload)
    dispatch(setMale(payload))
  }
  const handleAge = (evt) => {
    setAgeUser(evt.target.value)
    validInput.onChange(evt.target.value)
    dispatch(setAge(evt.target.value))
  }
  return (
    <div className={styles.section__age_male}>
      <div className={styles.age}>
        <span className={styles.title}>Укажите возраст:</span>
        <input
          type="text"
          value={ageUser}
          className={styles.input_age}
          onChange={handleAge}
          onBlur={(evt) => validInput.onBlur(evt.target.value)}
        ></input>
        <span className={styles.error}>{validInput.textError}</span>
      </div>
      <div className={styles.male}>
        <span className={styles.title}>Укажите пол:</span>
        <div className={styles.radio_wrap}>
          <Radio
            text={'мужской'}
            id={'man1'}
            val={'man'}
            changed={() => handleMale('man')}
          />

          <Radio
            text={'женский'}
            id={'woman1'}
            val={'woman'}
            changed={() => handleMale('woman')}
          />
        </div>
      </div> 
    </div>
  )
}

export default AgeAndMale
