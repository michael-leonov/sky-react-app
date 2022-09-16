import React from 'react'
import likeIcon from '../../../img/sprite.svg'

function TrackTime({ time }) {
  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref={`${likeIcon}#icon-like`} />
      </svg>
      <span className="track__time-text">{time}</span>
    </div>
  )
}

export default TrackTime
