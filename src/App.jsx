import React, { useState, useMemo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import AppRoutes from './routes'
import * as Styled from './styles'
import { ThemeContext, themes } from './context/theme'

function App() {
  const { userToken } = useSelector((state) => state.user)
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
        <Styled.GlobalStyle auth={!userToken} />
        <AppRoutes />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
