import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './slices/quizSlice'
import doctorSlice from './slices/doctorSlice'

const store = configureStore({
  reducer: {
    // Свойство quiz будет внутри объекта общего состояния: state.counter
    quiz: quizReducer,
    doctor:doctorSlice
  },
})

export default store
