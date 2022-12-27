import React from 'react'
import { useSelector } from 'react-redux'
import TrackPlayElement from './TrackPlayElement'
import sprite from '../../img/sprite.svg'
import * as Styled from './styles/track-play-styles'

function TrackPlayContain() {
  const { activeSong } = useSelector((state) => state.player)

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
        tag={<Styled.TagElementInfo>{activeSong.author}</Styled.TagElementInfo>}
      />
      <TrackPlayElement
        gridArea="album"
        minWidth="49px"
        tag={<Styled.TagElementInfo>{activeSong.name}</Styled.TagElementInfo>}
      />
    </Styled.TrackPlayInfo>
  )
}

export default TrackPlayContain
