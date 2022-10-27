import React, { useState } from 'react'
import AppRoutes from './routes'
import * as Styled from './styles'

function App() {
  const [token, setToken] = useState()

  return (
    <>
      <Styled.GlobalStyle auth={!token} />
      <AppRoutes auth={token} setToken={setToken} />
    </>
  )
}

export default App
