import React from 'react'

function TrackPlayElement({ el, tag }) {
  return <div className={`track-play__${el}`}>{tag}</div>
}

export default TrackPlayElement
