import { createSlice } from '@reduxjs/toolkit'
import imageDoctor from '../../assets/images/doctor.webp'

// Начальное значение
const initialState = {
  name: 'Воронкова Ирина',
  job: 'подолог',
  photo: imageDoctor
}

const doctorSlice = createSlice({
  name: 'quiz',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setName } = doctorSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default doctorSlice.reducer
