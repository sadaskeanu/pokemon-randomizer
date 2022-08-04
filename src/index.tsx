import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './styles/base.css'
import './styles/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
