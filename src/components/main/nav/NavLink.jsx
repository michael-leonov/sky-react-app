import React from 'react'
import * as Styled from './styles'

function NavLink({ name, href }) {
  return (
    <Styled.MenuItem>
      <Styled.MenuItemLink href={href}>{name}</Styled.MenuItemLink>
    </Styled.MenuItem>
  )
}

export default NavLink
