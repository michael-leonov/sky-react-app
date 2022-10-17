import React from 'react'
import { StyledTrackPlayElement } from './styles/track-play-styles'

function TrackPlayElement({
  tag,
  width,
  height,
  fill,
  stroke,
  bgc,
  display,
  ai,
  jc,
  mr,
  ml,
  ga,
  mw,
  padding,
  fs,
  fw,
  fz,
  lh,
  color,
  ws,
}) {
  return (
    <StyledTrackPlayElement
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      backgroundColor={bgc}
      display={display}
      alignItems={ai}
      justifyContent={jc}
      marginRight={mr}
      marginLeft={ml}
      gridArea={ga}
      minWidth={mw}
      padding={padding}
      fontStyle={fs}
      fontWeight={fw}
      fontSize={fz}
      lineHeight={lh}
      color={color}
      whiteSpace={ws}
    >
      {tag}
    </StyledTrackPlayElement>
  )
}

export default TrackPlayElement
