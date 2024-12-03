import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Component from './Component'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Component/> */}
    
  </StrictMode>,
)
