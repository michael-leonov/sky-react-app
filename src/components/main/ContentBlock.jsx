/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Search from './content-block/Search'
import FilterTrack from './content-block/FilterTrack'
import TracksTitle from './content-block/TracksTitle'
import Track from './content-block/Track'
import watch from './img/sprite.svg'

function ContentBlock() {
  // const [isLoading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])
  // useEffect(() => {
  //   fetch('https://github.com/Stasy-cmd/music_proj')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setTracks(json)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => setLoading(false))
  // }, [])

  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterTrack name="author" filter="исполнителю" items={tracks.author} />
        <FilterTrack name="year" filter="году выпуска" />
        <FilterTrack name="genre" filter="жанру" />
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
        <div className="content__playlist playlist">
          {tracks.map((obj) => (
            <Track {...obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentBlock
