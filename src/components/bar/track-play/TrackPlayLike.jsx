import React from 'react'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'
import * as Styled from './styles/track-play-styles'

function TrackPlayLike() {
  return (
    <Styled.TrackPlayLikeDislike>
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
    </Styled.TrackPlayLikeDislike>
  )
}

export default TrackPlayLike
