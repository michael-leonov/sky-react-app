import React from 'react'
import search from '../../img/sprite.svg'

function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref={`${search}#icon-search`} />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}

export default Search
