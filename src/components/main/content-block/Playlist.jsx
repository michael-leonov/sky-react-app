/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import * as Styled from './styles/playlist'
import Track from './Track'

function Playlist({ tracks }) {
  return (
    <Styled.PlaylistWrapper>
      {tracks.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </Styled.PlaylistWrapper>
  )
}

export default Playlist
