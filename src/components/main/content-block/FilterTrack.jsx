/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'

function FilterTrack({ name, filter, items, filterName }) {
  const [active, setActive] = useState(false)
  const [filterCase, setFilter] = useState([])

  function chosenFilter() {
    setActive(!active)
    if (filterName === 'author') {
      setFilter(items.map((item) => item.author).reduce((result, item) => result.includes(item) ? result : [... result, item], []))
    } else if (filterName === 'genre') {
      setFilter(items.map((item) => item.genre).reduce((result, item) => result.includes(item) ? result : [... result, item], []))
    } else if (filterName === 'release_date') {
      setFilter(items.map((item) => item.release_date).reduce((result, item) => result.includes(item) ? result : [... result, item], []))
    }
  }
  

  return (
    <div className="filter__wrapper">
      <div
        className={`filter__button button-${name} _btn-text ${
          active ? 'active' : ''
        }`}
        onClick={() => chosenFilter()}
      >
        {filter}
      </div>
      {active && (
        <div className="filter__modal">
          <ul className="filter__modal-list">
            {filterCase.map((item) => (
              <li className="item">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterTrack
