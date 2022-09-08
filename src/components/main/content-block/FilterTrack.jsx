import React from 'react'

function FilterTrack({ name, filter }) {
  return (
    <div className={`filter__button button-${name} _btn-text`}>{filter}</div>
  )
}

export default FilterTrack
