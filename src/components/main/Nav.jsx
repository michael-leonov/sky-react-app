import React from 'react'
import logo from './img/logo.png'
import NavLink from './nav/NavLink'

function Nav() {
  return (
    <div className="main__nav nav">
      <div className="nav__logo logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavLink href="#" name="Главное" />
          <NavLink href="#" name="Мой плейлист" />
          <NavLink href="#" name="Войти" />
        </ul>
      </div>
    </div>
  )
}

export default Nav
