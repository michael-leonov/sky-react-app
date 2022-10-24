import React from 'react'
import Nav from './main/Nav'
import ContentBlock from './main/ContentBlock'
import SideBar from './main/SideBar'
import Bar from './bar/Bar'
import * as Styled from './main-styles'

function Main() {
  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock urlToFetch="catalog/track/all/" />
        <SideBar />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Main
