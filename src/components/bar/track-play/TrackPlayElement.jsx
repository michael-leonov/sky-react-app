import React from 'react'
import { StyledTrackPlayElement } from './styles/track-play-styles'

function TrackPlayElement({
  tag,
  width,
  height,
  fill,
  stroke,
  backgroundColor,
  display,
  alignItems,
  justifyContent,
  marginRight,
  marginLeft,
  gridArea,
  minWidth,
  padding,
  fontStyle,
  fontWeight,
  fontSize,
  lineHeight,
  color,
  whiteSpace,
  gridRow,
}) {
  return (
    <StyledTrackPlayElement
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      backgroundColor={backgroundColor}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      marginRight={marginRight}
      marginLeft={marginLeft}
      gridArea={gridArea}
      gridRow={gridRow}
      minWidth={minWidth}
      padding={padding}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      whiteSpace={whiteSpace}
    >
      {tag}
    </StyledTrackPlayElement>
  )
}

export default TrackPlayElement
