import React from 'react'
import sprite from '../img/sprite.svg'
import { StyledBarBtn, StyledBarBtnSvg } from './styles/bar-styles'

function BarElement({
  el,
  alt,
  marginRight,
  fill,
  widthSvg,
  heightSvg,
  fillSvg,
  strokeSvg,
  onClick,
}) {
  return (
    <StyledBarBtn marginRight={marginRight} fill={fill} onClick={onClick}>
      <StyledBarBtnSvg
        width={widthSvg}
        height={heightSvg}
        fill={fillSvg}
        stroke={strokeSvg}
        alt={alt}
      >
        <use xlinkHref={`${sprite}#icon-${el}`} />
      </StyledBarBtnSvg>
    </StyledBarBtn>
  )
}

export default BarElement
