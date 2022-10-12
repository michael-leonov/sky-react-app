/* eslint-disable camelcase */
import React from 'react'
import TrackAuthor from './track/TrackAuthor'
import TrackTitle from './track/TrackTitle'
import TrackAlbum from './track/TrackAlbum'
import TrackTime from './track/TrackTime'
import * as Styled from './styles/track-styles'

function Track({ name, author, duration_in_seconds, album }) {
  return (
    <Styled.TrackItem>
      <Styled.TrackWrapper className="track">
        <TrackTitle title={name} />
        <TrackAuthor author={author} />
        <TrackAlbum album={album} />
        <TrackTime time={duration_in_seconds} />
      </Styled.TrackWrapper>
    </Styled.TrackItem>
  )
}

export default Track
