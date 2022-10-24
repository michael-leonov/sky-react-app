import React from 'react'
import * as Styled from '../../components/main-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import Bar from '../../components/bar/Bar'

function Favorites() {
  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock title="Мои треки" />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Favorites
