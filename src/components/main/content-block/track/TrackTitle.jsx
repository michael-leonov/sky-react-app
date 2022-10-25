import React from 'react'
import titleIcon from '../../../img/sprite.svg'
import * as Styled from './styles/track-title-styles'

function TrackTitle({ title }) {
  return (
    <Styled.TrackTitleWrapper>
      <Styled.TrackTitleImgWrapper>
        <Styled.TrackTitleImg alt="music">
          <use xlinkHref={`${titleIcon}#icon-note`} />
        </Styled.TrackTitleImg>
      </Styled.TrackTitleImgWrapper>
      <div>
        <Styled.TrackTitleLink href="http://">
          {title} <Styled.TrackTitleLinkSpan />
        </Styled.TrackTitleLink>
      </div>
    </Styled.TrackTitleWrapper>
  )
}

export default TrackTitle
