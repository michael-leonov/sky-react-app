import React from 'react'
import './style/App.scss'
import Main from './components/Main'

function App() {
  window.baseUrl = 'http://178.154.207.247:8000/'

  return (
    <div className="wrapper">
      <Main />
    </div>
  )
}

export default App
