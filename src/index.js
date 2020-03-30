import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux' // создание хранилища стор из редакс
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './index.css'
import './loader.gif'

const store = createStore(rootReducer) // константа, которая равна функции, которая определяет хранилище

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
