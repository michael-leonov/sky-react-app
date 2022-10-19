import React from 'react'
import Main from './components/Main'
import * as Styled from './styles'

function App() {
  window.baseUrl = 'http://178.154.207.247:8000/'

  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Main />
      </Styled.Wrapper>
    </>
  )
}

export default App
