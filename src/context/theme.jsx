import React, { useContext } from 'react'

export const themes = {
  light: {
    color: '#282c34',
    background: '#fff',
    name: 'light',
  },
  dark: {
    color: '#fff',
    background: '#181818',
    name: 'dark',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
