/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './router/AppRouter'

import store from './redux/store'
import './assets/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </div>
)
