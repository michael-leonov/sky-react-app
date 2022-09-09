import React from 'react'
import titleIcon from './img/sprite.svg'

function TrackTitle({ title }) {
  return (
    <div className="track__title">
      <div className="track__title-image">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref={`${titleIcon}#icon-note`} />
        </svg>
      </div>
      <div className="track__title-text">
        <a className="track__title-link" href="http://">
          {title} <span className="track__title-span" />
        </a>
      </div>
    </div>
  )
}

export default TrackTitle
