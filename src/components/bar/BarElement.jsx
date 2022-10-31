import React from 'react'
import sprite from '../img/sprite.svg'
import { StyledBarBtn, StyledBarBtnSvg } from './styles/bar-styles'

const BarElement = React.forwardRef((props, ref) => (
  <StyledBarBtn marginRight={props.marginRight} fill={props.fill} ref={ref}>
    <StyledBarBtnSvg
      width={props.widthSvg}
      height={props.heightSvg}
      fill={props.fillSvg}
      stroke={props.strokeSvg}
      alt={props.alt}
    >
      <use xlinkHref={`${sprite}#icon-${props.el}`} />
    </StyledBarBtnSvg>
  </StyledBarBtn>
))

export default BarElement
