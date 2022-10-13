import React from 'react'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'
import * as Styled from './styles/track-play-styles'

function TrackPlayContain() {
  return (
    <Styled.TrackPlayInfo>
      <TrackPlayElement
        el="image"
        tag={
          <svg className="track-play__svg" alt="music">
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        }
      />
      <TrackPlayElement
        el="author"
        tag={
          <a className="track-play__author-link" href="http://">
            {}
          </a>
        }
      />
      <TrackPlayElement
        el="album"
        tag={
          <a className="track-play__album-link" href="http://">
            {}
          </a>
        }
      />
    </Styled.TrackPlayInfo>
  )
}

export default TrackPlayContain
