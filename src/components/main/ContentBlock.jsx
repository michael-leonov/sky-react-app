/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import Search from './content-block/Search'
import FilterTrack from './content-block/FilterTrack'
import TracksTitle from './content-block/TracksTitle'
import Track from './content-block/Track'
import watch from '../img/sprite.svg'
import SkeletonTrack from './content-block/SkeletonTrack'
import * as Styled from './styles/content-block-styles'
import { StyledTrackTimeIcon } from './content-block/styles/track-styles'

function ContentBlock({ title = 'Треки', tracks, isLoading }) {
  return (
    <Styled.CenterBlock>
      <Search />
      <Styled.Title>{title}</Styled.Title>
      <Styled.FilterBlock className="filter">
        <Styled.FilterHeader>Искать по:</Styled.FilterHeader>
        <FilterTrack filter="исполнителю" items={tracks} filterName="author" />
        <FilterTrack
          filter="году выпуска"
          items={tracks}
          filterName="release_date"
        />
        <FilterTrack filter="жанру" items={tracks} filterName="genre" />
      </Styled.FilterBlock>
      <Styled.CenterBlockContent>
        <Styled.ContentTitles>
          <TracksTitle title="Трек" />
          <TracksTitle title="Исполнитель" />
          <TracksTitle title="Альбом" />
          <TracksTitle
            title={
              <StyledTrackTimeIcon alt="time">
                <use xlinkHref={`${watch}#icon-watch`} />
              </StyledTrackTimeIcon>
            }
          />
        </Styled.ContentTitles>
        {isLoading ? (
          <Styled.SkeletonWrapper>
            {Array.from({ length: 5 }).fill(<SkeletonTrack />)}
          </Styled.SkeletonWrapper>
        ) : (
          <Styled.Playlist>
            {tracks.map((track) => (
              <Track key={track.id} {...track} />
            ))}
          </Styled.Playlist>
        )}
      </Styled.CenterBlockContent>
    </Styled.CenterBlock>
  )
}

export default ContentBlock
