import React from 'react'

function Personal({ name }) {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{name}</p>
      <div className="sidebar__avatar" />
    </div>
  )
}

export default Personal
