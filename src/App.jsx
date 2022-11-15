import React, { useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './routes'
import * as Styled from './styles'
import { ThemeContext, themes } from './context/theme'

function App() {
  const [token, setToken] = useState()
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  const themeContextMemo = useMemo(
    () => ({ themeContext: currentTheme, toggleTheme }),
    [currentTheme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={themeContextMemo}>
      <ThemeProvider theme={themeContextMemo}>
        <Styled.GlobalStyle auth={!token} />
        <AppRoutes auth={token} setToken={setToken} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
