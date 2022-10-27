import React from 'react'
import * as Styled from './styles'

function NavLink({ name, link }) {
  return (
    <Styled.MenuItem>
      <Styled.MenuItemLink to={link}>{name}</Styled.MenuItemLink>
    </Styled.MenuItem>
  )
}

export default NavLink
