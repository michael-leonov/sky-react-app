/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

function FilterTrack({ name, filter, items }) {
  const [active, setActive] = useState(false)

  return (
    <div className="filter__wrapper">
      <div
        className={`filter__button button-${name} _btn-text ${
          active ? 'active' : ''
        }`}
        onClick={() => setActive(!active)}
      >
        {filter}
      </div>
      {active && (
        <div className="filter__modal">
          <ul className="filter__modal-list">
            {items.map((item) => (
              <li className="item">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterTrack
