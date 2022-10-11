/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import logo from '../img/logo.png'
import NavLink from './nav/NavLink'

function Nav() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="main__nav nav">
      <div className="nav__logo logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className={`nav__burger burger ${visible ? 'show' : ''}`}
        onClick={() => setVisible(!visible)}
      >
        <span className="burger__line" />
      </div>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <NavLink href="#" name="Главное" />
            <NavLink href="#" name="Мой плейлист" />
            <NavLink href="#" name="Войти" />
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav
