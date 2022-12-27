import React from 'react'
import { useParams } from 'react-router-dom'
import * as Styled from '../home/home-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import Bar from '../../components/bar/Bar'
import { useGetSelectionQuery } from '../../redux/services/tracks'

function Playlist() {
  const { id } = useParams()
  const { data, isLoading } = useGetSelectionQuery(id)

  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock tracks={data?.items} isLoading={isLoading} />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Playlist
