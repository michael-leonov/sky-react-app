/* eslint-disable camelcase */
import React from 'react'
import TrackAuthor from './track/TrackAuthor'
import TrackTitle from './track/TrackTitle'
import TrackAlbum from './track/TrackAlbum'
import TrackTime from './track/TrackTime'

function Track({ name, author, genre, duration_in_seconds, album }) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <TrackTitle title={name} />
        <TrackAuthor author={author} />
        <TrackAlbum album={album} />
        <TrackTime time={duration_in_seconds} />
      </div>
    </div>
  )
}

export default Track
