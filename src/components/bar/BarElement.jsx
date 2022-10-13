import React from 'react'
import sprite from '../img/sprite.svg'

function BarElement({ el, alt }) {
  return (
    // how add styles
    <div className={`player__btn-${el}`}>
      <svg className={`player__btn-${el}-svg`} alt={alt}>
        <use xlinkHref={`${sprite}#icon-${el}`} />
      </svg>
    </div>
  )
}

export default BarElement
