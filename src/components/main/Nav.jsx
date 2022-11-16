/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import logo from '../img/logo.png'
import NavLink from './nav/NavLink'
import * as Styled from './styles/nav-styles'
import { useThemeContext } from '../../context/theme'
import DarkThemeImg from '../../assets/static/DarkTheme.svg'
import LightThemeImg from '../../assets/static/LightTheme.svg'

function Nav() {
  const [visible, setVisible] = useState(false)

  const { toggleTheme, themeContext } = useThemeContext()

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
            <NavLink link="/" name="Главное" />
            <NavLink link="/favorites" name="Мой плейлист" />
            <NavLink link="/login" name="Выйти" />
          </Styled.MenuList>
        </Styled.NavMenuWrapper>
      )}
      <div onClick={toggleTheme}>
        <img
          src={themeContext.name === 'dark' ? DarkThemeImg : LightThemeImg}
          alt={
            themeContext.name === 'dark'
              ? 'Dark theme icon'
              : 'Light theme icon'
          }
        />
      </div>
    </Styled.NavWrapper>
  )
}

export default Nav
