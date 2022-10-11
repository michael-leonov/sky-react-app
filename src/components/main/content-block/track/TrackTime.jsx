import React from 'react'
import likeIcon from '../../../img/sprite.svg'

function TrackTime({ time }) {

  const min = Math.floor(time / 60);
  const secs = time % 60;

  const formatedTime = [
    min.toString(),
    secs.toString().padStart(2, '0')
  ].join(':')

  return (
    <div className="track__time">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref={`${likeIcon}#icon-like`} />
      </svg>
      <span className="track__time-text">{formatedTime}</span>
    </div>
  )
}

export default TrackTime
