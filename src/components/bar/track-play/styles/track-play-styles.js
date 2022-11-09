import styled from 'styled-components'

export const TrackPlayInfo = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image album' 'image author';
  align-items: center;
`
export const TrackPlayLikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const StyledTrackPlayElement = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  grid-area: ${(props) => props.gridArea};
  grid-row: ${(props) => props.gridRow};
  min-width: ${(props) => props.minWidth};
  padding: ${(props) => props.padding};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  white-space: ${(props) => props.whiteSpace};

  :hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  :active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const TagElementInfo = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: white;
`
