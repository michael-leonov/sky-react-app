/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import BarElement from './BarElement'
import TrackPlayContain from './track-play/TrackPlayContain'
import sprite from '../img/sprite.svg'
import TrackPlayLike from './track-play/TrackPlayLike'
import * as Styled from './styles/bar-styles'

function Bar() {
  const { currentSongs, activeSong, isActive } = useSelector(
    (state) => state.player
  )
  const [isPlaying, setPlaying] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)

  const audioRef = useRef(new Audio(activeSong.track_file))
  audioRef.current.preload = 'metadata'

  useEffect(() => {
    setPlaying(true)
    if (activeSong.track_file) {
      audioRef.current.pause()
      audioRef.current = new Audio(activeSong.track_file)
      audioRef.current.play()
    } else audioRef.current = new Audio(activeSong.track_file)
  }, [activeSong.track_file])

  const musicProgress = () => {
    const progress =
      Math.floor(audioRef.current.currentTime) /
      (Math.floor(audioRef.current.duration) / 100)
    setProgressValue(progress)
  }

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
    audioRef.current.addEventListener('timeupdate', musicProgress)
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false))
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    audioRef.current.loop = repeat
  }, [repeat])

  const handlePlayPause = () => {
    if (!isActive) return
    setPlaying(!isPlaying)
  }

  return (
    isActive && (
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
                  onClick={handlePlayPause}
                />
                <div> {isPlaying ? 'pause' : 'play'} </div>

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
                  onClick={() => setRepeat(!repeat)}
                />
                <BarElement
                  el="shuffle"
                  widthSvg="19px"
                  heightSvg="12px"
                  fillSvg="transparent"
                  strokeSvg="#696969"
                  alt="shuffle"
                  onClick={() => setShuffle(!shuffle)}
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
                  <Styled.VolumeProgressBarInput
                    type="range"
                    name="range"
                    step="any"
                    min="0"
                    max="1"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </Styled.VolumeProgressBar>
              </Styled.VolumeWrapper>
            </Styled.BarVolumeBlock>
          </Styled.BarPlayerBlock>
        </Styled.BarContent>
      </Styled.BarWrapper>
    )
  )
}

export default Bar
