import React, { useEffect, useState } from 'react'
import TrackAuthor from './track/TrackAuthor'
import TrackTitle from './track/TrackTitle'
import TrackAlbum from './track/TrackAlbum'
import TrackTime from './track/TrackTime'

function Track() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle />
        <TrackAuthor />
        <TrackAlbum />
        <TrackTime />
      </div>
    </div>
  )
}

export default Track
