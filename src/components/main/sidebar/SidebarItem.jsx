import React from 'react'

function SidebarItem({ imgName, alt, href }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={href}>
        <img className="sidebar__img" src={`../sidebar/img/${imgName}`} alt={alt} />
      </a>
    </div>
  )
}

export default SidebarItem
