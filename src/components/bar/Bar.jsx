import React from 'react'
import BarElement from './BarElement'
import TrackPlayContain from './track-play/TrackPlayContain'
import sprite from '../img/sprite.svg'
import TrackPlayLike from './track-play/TrackPlayLike'
import * as Styled from './styles/bar-styles'

function Bar() {
  return (
    <Styled.BarWrapper className="bar">
      <Styled.BarContent>
        <Styled.ProgressBar />
        <Styled.BarPlayerBlock>
          <Styled.BarPlayer className="player">
            <Styled.BarControls>
              <BarElement el="prev" alt="prev" />
              <BarElement el="play" alt="play" />
              <BarElement el="next" alt="next" />
              <BarElement el="repeat" alt="repeat" />
              <BarElement el="shuffle" alt="shuffle" />
            </Styled.BarControls>
            <Styled.TrackPlay className="track-play">
              <TrackPlayContain />
              <TrackPlayLike />
            </Styled.TrackPlay>
          </Styled.BarPlayer>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref={`${sprite}#icon-dislike`} />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </Styled.BarPlayerBlock>
      </Styled.BarContent>
    </Styled.BarWrapper>
  )
}

export default Bar
