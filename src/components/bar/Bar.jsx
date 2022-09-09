import React from 'react'
import BarElement from './BarElement'
import TrackPlayContain from './track-play/TrackPlayContain'
import sprite from './img/sprite.svg'
import TrackPlayLike from './track-play/TrackPlayLike'

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <BarElement el="prev" alt="prev" />
              <BarElement el="play" alt="play" />
              <BarElement el="next" alt="next" />
              <BarElement el="repeat" alt="repeat" />
              <BarElement el="shuffle" alt="shuffle" />
            </div>
            <div className="player__track-play track-play">
              <TrackPlayContain />
              <TrackPlayLike />
            </div>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Bar
