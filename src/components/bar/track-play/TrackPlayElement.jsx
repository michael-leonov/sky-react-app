import React from 'react'
import * as Styled from './styles/track-play-styles'

function TrackPlayElement({ el, tag }) {
  // How add styles
  return <div className={`track-play__${el}`}>{tag}</div>
}

export default TrackPlayElement
