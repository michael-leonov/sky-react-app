import React from 'react'
import Sprite from './img/sprite.svg'

function BarElement({ el, alt }) {
  return (
    <div className={`player__btn-${el}`}>
      <svg className={`player__btn-${el}-svg`} alt={alt}>
        <use xlinkHref={`${Sprite}#icon-${el}`} />
      </svg>
    </div>
  )
}

export default BarElement
