import React from 'react'

function NavLink({ name, href }) {
  return (
    <li className="menu__item">
      <a href={href}>{name}</a>
    </li>
  )
}

export default NavLink
