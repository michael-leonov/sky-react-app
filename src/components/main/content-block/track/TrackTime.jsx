import React from 'react'
import likeIcon from '../../../img/sprite.svg'
import * as Styled from './styles/track-time-styles'

function TrackTime({ time }) {
  const min = Math.floor(time / 60)
  const secs = time % 60

  const formatedTime = [min.toString(), secs.toString().padStart(2, '0')].join(
    ':'
  )

  return (
    <div>
      <Styled.TrackTimeImg alt="time">
        <use xlinkHref={`${likeIcon}#icon-like`} />
      </Styled.TrackTimeImg>
      <Styled.TrackTimeText>{formatedTime}</Styled.TrackTimeText>
    </div>
  )
}

export default TrackTime
