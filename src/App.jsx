import React, { useState } from 'react'
import AppRoutes from './routes'
import * as Styled from './styles'

function App() {
  window.baseUrl = 'http://51.250.95.23:8000/'

  const [token, setToken] = useState()

  return (
    <>
      <Styled.GlobalStyle auth={!token} />
      <AppRoutes auth={token} setToken={setToken} />
    </>
  )
}

export default App
