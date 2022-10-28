import styled from 'styled-components'

export const BarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const BarControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const TrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const VolumeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const VolumeImageWrapper = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeImage = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgressBar = styled.svg`
  width: 109px;
  cursor: pointer;
`
export const VolumeProgressBarInput = styled.svg`
  width: 109px;
  cursor: pointer;
`
export const StyledBarBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRight};
  fill: ${(props) => props.fill};

  :hover {
    cursor: pointer;
  }
`
export const StyledBarBtnSvg = styled.svg`
  width: ${(props) => props.widthSvg};
  height: ${(props) => props.heightSvg};
  fill: ${(props) => props.fillSvg};
  stroke: ${(props) => props.strokeSvg};
`
