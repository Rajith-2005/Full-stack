import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Run from './assets/Run.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Run/>
  </StrictMode>,
)
