/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import logo from '../img/logo.png'
import NavLink from './nav/NavLink'
import * as Styled from './styles/nav-styles'
import { useThemeContext } from '../../context/theme'

function Nav() {
  const [visible, setVisible] = useState(false)

  const { toggleTheme } = useThemeContext()

  return (
    <Styled.NavWrapper>
      <Styled.LogoWrapper onClick={toggleTheme}>
        <Styled.Logo src={logo} alt="Logo" />
      </Styled.LogoWrapper>
      <Styled.Burger onClick={() => setVisible(!visible)}>
        <Styled.BurgerLines active={visible} />
      </Styled.Burger>
      {visible && (
        <Styled.NavMenuWrapper>
          <Styled.MenuList>
            <NavLink link="/" name="Главное" />
            <NavLink link="/favorites" name="Мой плейлист" />
            <NavLink link="/login" name="Выйти" />
          </Styled.MenuList>
        </Styled.NavMenuWrapper>
      )}
    </Styled.NavWrapper>
  )
}

export default Nav
