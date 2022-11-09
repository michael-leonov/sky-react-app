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
        tag={<Styled.TagElementInfo>Bobby Marleni</Styled.TagElementInfo>}
      />
      <TrackPlayElement
        gridArea="album"
        minWidth="49px"
        tag={<Styled.TagElementInfo>Dropin</Styled.TagElementInfo>}
      />
    </Styled.TrackPlayInfo>
  )
}

export default TrackPlayContain
