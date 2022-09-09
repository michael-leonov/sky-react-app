import React from 'react'

function SidebarItem({ src, alt, href }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={href}>
        <img className="sidebar__img" src={src} alt={alt} />
      </a>
    </div>
  )
}

export default SidebarItem
