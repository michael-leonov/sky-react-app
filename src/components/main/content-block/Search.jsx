import React from 'react'
import search from '../../img/sprite.svg'
import * as Styled from './styles/search-styles'

function Search() {
  return (
    <Styled.SearchWrapper className="search">
      <Styled.SearchIcon>
        <use xlinkHref={`${search}#icon-search`} />
      </Styled.SearchIcon>
      <Styled.SearchInput type="search" placeholder="Поиск" name="search" />
    </Styled.SearchWrapper>
  )
}

export default Search
