import React from 'react'
import * as Styled from './styles/track-album-styles'

function TrackAlbum({ album }) {
  return (
    <Styled.TrackAlbumWrapper>
      <Styled.TrackAlbumLink href="http://">{album}</Styled.TrackAlbumLink>
    </Styled.TrackAlbumWrapper>
  )
}

export default TrackAlbum
