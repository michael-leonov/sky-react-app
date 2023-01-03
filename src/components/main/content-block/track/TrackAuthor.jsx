import React from 'react'
import * as Styled from './styles/track-author-styles'

function TrackAuthor({ author }) {
  return (
    <Styled.TrackAuthorWrapper>
      <Styled.TrackAuthorLink>{author}</Styled.TrackAuthorLink>
    </Styled.TrackAuthorWrapper>
  )
}

export default TrackAuthor
