/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import logo from '../img/logo.png'
import NavLink from './nav/NavLink'
import * as Styled from './styles/nav-styles'

function Nav() {
  const [visible, setVisible] = useState(false)

  return (
    <Styled.NavWrapper>
      <Styled.LogoWrapper>
        <Styled.Logo src={logo} alt="Logo" />
      </Styled.LogoWrapper>
      <Styled.Burger onClick={() => setVisible(!visible)}>
        <Styled.BurgerLines active={visible} />
      </Styled.Burger>
      {visible && (
        <Styled.NavMenuWrapper>
          <Styled.MenuList>
            <NavLink href="#" name="Главное" />
            <NavLink href="#" name="Мой плейлист" />
            <NavLink href="#" name="Войти" />
          </Styled.MenuList>
        </Styled.NavMenuWrapper>
      )}
    </Styled.NavWrapper>
  )
}

export default Nav
