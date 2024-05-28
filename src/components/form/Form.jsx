import React, { useState, useEffect } from 'react'

import styles from './Form.module.css'

const Form = ({
  showBtnClose = false,
  setClose,
  isWhite = false,
}) => {
  const [valueInput, setValueInput] = useState({
    name: '',
    contact: '',
    question: '',
  })

  const [isDisabled, setIsDisabled] = useState(true)

  const handleValueName = (evt) => {
    setValueInput({ ...valueInput, name: evt.target.value })
  }

  const handleValueContact = (evt) => {
    setValueInput({ ...valueInput, contact: evt.target.value })
  }

  const handleValueQuestion = (evt) => {
    setValueInput({ ...valueInput, question: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(valueInput)
    setValueInput({ name: '', contact: '', question: '' })
  }
  const handleClose = (evt) => {
    evt.preventDefault()
    setClose(false)
  }
  useEffect(() => {
    if (valueInput.name === '' || valueInput.question === '') {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [valueInput])
  return (
    <form className={styles.section_form} onSubmit={handleSubmit}>
      <div className={styles.input_wrap}>
        <label htmlFor="input-name" className={styles.label}>
          Ваше имя*:
        </label>
        <input
          className={styles.input}
          id="input-name"
          type="text"
          required
          value={valueInput.name}
          onChange={handleValueName}
        />
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="input-contact" className={styles.label}>
          Контакт:
        </label>
        <input
          className={styles.input}
          id="input-contact"
          type="text"
          value={valueInput.contact}
          onChange={handleValueContact}
        />
      </div>

      <div className={styles.input_wrap}>
        <label htmlFor="input-question" className={styles.label}>
          Ваш вопрос*:
        </label>
        <textarea
          id="input-question"
          className={`${styles.input} ${styles.textarea}`}
          type="textarea"
          required
          value={valueInput.question}
          onChange={handleValueQuestion}
        />
      </div>
      <div className={styles.btn_wrap}>
        <button
          className={
            isWhite ? `${styles.btn_white}` : `${styles.btn}`
          }
          disabled={isDisabled}
        >
          отправить
        </button>
        {showBtnClose && (
          <button
            className={
              isWhite ? `${styles.btn_white}` : `${styles.btn}`
            }
            onClick={handleClose}
          >
            закрыть
          </button>
        )}
      </div>
    </form>
  )
}

export default Form
