import styled from 'styled-components'

export const TrackLikeImg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: ${({ isLike }) => (isLike ? 'red' : 'transparent')};
  stroke: ${({ isLike }) => (isLike ? 'red' : '#696969')}; ;
`

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
