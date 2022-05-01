// import React from 'react'
// import { render } from 'react-dom'
import { createRoot } from "react-dom/client";
import routes from './routes/index'
import './assets/styles/main.css'

// render(
//   routes(),
//   document.getElementById('root')
// )

const container = document.getElementById("root");
createRoot(container).render(routes());
