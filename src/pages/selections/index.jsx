import React, { useParams, useState } from 'react'
import * as Styled from '../../components/main-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import Bar from '../../components/bar/Bar'

function Playlist() {
  // Поднимать получение треков?

  //   const params = useParams()

  //   const select = tracks.find((el) => el.id === Number(params.id))

  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock urlToFetch="catalog/selection/" />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Playlist
