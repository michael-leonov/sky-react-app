import React from 'react'
import * as Styled from './styles'
import { useThemeContext } from '../../../context/theme'

function NavLink({ name, link }) {
  const { theme } = useThemeContext()

  return (
    <Styled.MenuItem>
      <Styled.MenuItemLink to={link} theme={theme}>
        {name}
      </Styled.MenuItemLink>
    </Styled.MenuItem>
  )
}

export default NavLink
