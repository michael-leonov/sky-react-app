import React from 'react'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'
import * as Styled from './styles/track-play-styles'

function TrackPlayLike() {
  return (
    <Styled.TrackPlayLikeDislike>
      <TrackPlayElement
        padding="5px"
        tag={
          <svg
            width="14px"
            height="12px"
            fill="transparent"
            stroke="#696969"
            alt="like"
          >
            <use xlinkHref={`${sprite}#icon-like`} />
          </svg>
        }
      />
      <TrackPlayElement
        padding="5px"
        marginLeft="28.5px"
        tag={
          <svg
            width="14.34px"
            height="13px"
            fill="transparent"
            stroke="#696969"
            alt="dislike"
          >
            <use xlinkHref={`${sprite}#icon-dislike`} />
          </svg>
        }
      />
    </Styled.TrackPlayLikeDislike>
  )
}

export default TrackPlayLike
