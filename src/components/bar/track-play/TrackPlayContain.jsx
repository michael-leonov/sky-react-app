import React from 'react'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'
import * as Styled from './styles/track-play-styles'

function TrackPlayContain() {
  return (
    <Styled.TrackPlayInfo>
      <TrackPlayElement
        width="51px"
        height="51px"
        backgroundColor="#313131"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight="12px"
        gridArea="image"
        tag={
          <svg
            width="18px"
            height="17px"
            fill="transparent"
            stroke="#4e4e4e"
            alt="music"
          >
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        }
      />
      <TrackPlayElement
        gridArea="author"
        minWidth="49px"
        tag={
          <a
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            color="white"
            href="http://"
          >
            {}
          </a>
        }
      />
      <TrackPlayElement
        gridArea="album"
        minWidth="49px"
        tag={
          <a
            fontStyle="normal"
            fontWeight="400"
            fontSize="13px"
            color="white"
            href="http://"
          >
            {}
          </a>
        }
      />
    </Styled.TrackPlayInfo>
  )
}

export default TrackPlayContain
