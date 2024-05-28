import { createSlice } from '@reduxjs/toolkit'

// Начальное значение
const initialState = {
  age: '',
  male: '',
  error: '',
  totalScore: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload
    },
    setMale: (state, action) => {
      state.male = action.payload
    },
    countScore: (state, action) => {
      state.totalScore += action.payload
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setAge, setMale, countScore } = quizSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default quizSlice.reducer
