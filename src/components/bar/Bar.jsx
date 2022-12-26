/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BarElement from './BarElement'
import TrackPlayContain from './track-play/TrackPlayContain'
import sprite from '../img/sprite.svg'
import TrackPlayLike from './track-play/TrackPlayLike'
import * as Styled from './styles/bar-styles'
import sound from '../../assets/static/Bobby_Marleni_-_Dropin.mp3'

function Bar() {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player)
  const dispatch = useDispatch()

  const audioRef = useRef(new Audio(sound))
  audioRef.current.preload = 'metadata'

  const [playing, setPlaying] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  const togglePlay = () => setPlaying(!playing)

  const musicProgress = () => {
    const progress =
      Math.floor(audioRef.current.currentTime) /
      (Math.floor(audioRef.current.duration) / 100)
    setProgressValue(progress)
  }

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause()
    audioRef.current.addEventListener('timeupdate', musicProgress)
  }, [playing])

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false))
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return (
    <Styled.BarWrapper>
      <Styled.BarContent>
        <Styled.ProgressBar value={progressValue} max="100" />
        <Styled.BarPlayerBlock>
          <Styled.BarPlayer>
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
                onClick={togglePlay}
              />
              <div> {playing ? 'pause' : 'play'} </div>

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
