/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Search from './content-block/Search'
import FilterTrack from './content-block/FilterTrack'
import TracksTitle from './content-block/TracksTitle'
import Track from './content-block/Track'
import watch from '../img/sprite.svg'
import SkeletonTrack from './content-block/SkeletonTrack'

function ContentBlock() {
  const [isLoading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch(`${window.baseUrl}catalog/track/all/`)
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.results)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterTrack
          name="author"
          filter="исполнителю"
          items={tracks}
          filterName="author"
        />
        <FilterTrack
          name="year"
          filter="году выпуска"
          items={tracks}
          filterName="release_date"
        />
        <FilterTrack
          name="genre"
          filter="жанру"
          items={tracks}
          filterName="genre"
        />
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <TracksTitle title="Трек" />
          <TracksTitle title="Исполнитель" />
          <TracksTitle title="Альбом" />
          <TracksTitle
            title={
              <svg className="playlist-title__svg" alt="time">
                <use xlinkHref={`${watch}#icon-watch`} />
              </svg>
            }
          />
        </div>
        {isLoading ? (
          <div className="content__playlist playlist skeleton-list">
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
          </div>
        ) : (
          <div className="content__playlist playlist">
            {tracks.map((track) => (
              <Track key={track.id} {...track} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentBlock
