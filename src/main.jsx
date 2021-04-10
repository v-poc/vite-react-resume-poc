// import React from 'react'
import { render } from 'react-dom'
import routes from './routes/index'
import './assets/styles/main.css'

render(
  routes(),
  document.getElementById('root')
)
