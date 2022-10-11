import React from 'react'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'

function TrackPlayLike() {
  return (
    <div className="track-play__like-dis">
      <TrackPlayElement
        el="like"
        tag={
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref={`${sprite}#icon-like`} />
          </svg>
        }
      />
      <TrackPlayElement
        el="dislike"
        tag={
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref={`${sprite}#icon-dislike`} />
          </svg>
        }
      />
    </div>
  )
}

export default TrackPlayLike
