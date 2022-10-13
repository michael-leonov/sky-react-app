import React from 'react'
import BarElement from './BarElement'
import TrackPlayContain from './track-play/TrackPlayContain'
import sprite from '../img/sprite.svg'
import TrackPlayLike from './track-play/TrackPlayLike'
import * as Styled from './styles/bar-styles'

function Bar() {
  return (
    <Styled.BarWrapper>
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
          <Styled.BarVolumeBlock className="volume">
            <Styled.VolumeWrapper>
              <Styled.VolumeImageWrapper>
                <Styled.VolumeImage alt="volume">
                  <use xlinkHref={`${sprite}#icon-dislike`} />
                </Styled.VolumeImage>
              </Styled.VolumeImageWrapper>
              <Styled.VolumeProgressBar>
                <Styled.VolumeProgressBarInput type="range" name="range" />
              </Styled.VolumeProgressBar>
            </Styled.VolumeWrapper>
          </Styled.BarVolumeBlock>
        </Styled.BarPlayerBlock>
      </Styled.BarContent>
    </Styled.BarWrapper>
  )
}

export default Bar
