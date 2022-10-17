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
              <BarElement
                marginRight="23px"
                widthSvg="15px"
                heightSvg="14px"
                el="prev"
                alt="prev"
              />
              <BarElement
                marginRight="23px"
                widthSvg="22px"
                heightSvg="20px"
                fillSvg="#d9d9d9"
                el="play"
                alt="play"
              />
              <BarElement
                marginRight="28px"
                fill="#a53939"
                widthSvg="15px"
                heightSvg="14px"
                fillSvg="inherit"
                strokeSvg="#d9d9d9"
                el="next"
                alt="next"
              />
              <BarElement
                marginRight="24px"
                widthSvg="18px"
                heightSvg="12px"
                fillSvg="transparent"
                strokeSvg="#696969"
                el="repeat"
                alt="repeat"
              />
              <BarElement
                el="shuffle"
                widthSvg="19px"
                heightSvg="12px"
                fillSvg="transparent"
                strokeSvg="#696969"
                alt="shuffle"
              />
            </Styled.BarControls>
            <Styled.TrackPlay>
              <TrackPlayContain />
              <TrackPlayLike />
            </Styled.TrackPlay>
          </Styled.BarPlayer>
          <Styled.BarVolumeBlock>
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
