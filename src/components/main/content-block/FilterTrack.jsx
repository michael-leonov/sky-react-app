/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import * as Styled from './styles/filter-track-styles'

function FilterTrack({ filter, items, filterName }) {
  const [active, setActive] = useState(false)
  const [filterCase, setFilter] = useState([])

  function chosenFilter() {
    setActive(!active)
    if (filterName === 'author') {
      setFilter(
        items
          .map((item) => item.author)
          .reduce(
            (result, item) =>
              result.includes(item) ? result : [...result, item],
            []
          )
      )
    } else if (filterName === 'genre') {
      setFilter(
        items
          .map((item) => item.genre)
          .reduce(
            (result, item) =>
              result.includes(item) ? result : [...result, item],
            []
          )
      )
    } else if (filterName === 'release_date') {
      setFilter(
        items
          .map((item) => item.release_date)
          .reduce(
            (result, item) =>
              result.includes(item) ? result : [...result, item],
            []
          )
      )
    }
  }

  return (
    <Styled.FilterWrapper className="filter__wrapper">
      {/* how add class on clicked btn */}
      <div
        className={`filter__button  _btn-text ${active ? 'active' : ''}`}
        onClick={() => chosenFilter()}
      >
        {filter}
      </div>
      {active && (
        <Styled.FilterModal>
          <Styled.FilterModalList>
            {filterCase.map((item) => (
              <Styled.FilterModalItem>{item}</Styled.FilterModalItem>
            ))}
          </Styled.FilterModalList>
        </Styled.FilterModal>
      )}
    </Styled.FilterWrapper>
  )
}

export default FilterTrack
