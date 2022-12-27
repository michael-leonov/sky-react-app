/* eslint-disable no-console */
import React from 'react'
import * as Styled from '../home/home-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import Bar from '../../components/bar/Bar'
import { useGetAllTracksQuery } from '../../redux/services/tracks'

function Favorites() {
  const { data, isLoading } = useGetAllTracksQuery()

  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock title="Мои треки" tracks={data} isLoading={isLoading} />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Favorites
