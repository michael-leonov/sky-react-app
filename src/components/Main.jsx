import React, { useState, useEffect } from 'react'
import Nav from './main/Nav'
import ContentBlock from './main/ContentBlock'
import SideBar from './main/SideBar'
import Bar from './bar/Bar'
import * as Styled from './main-styles'
import { useThemeContext } from '../context/theme'
import { useGetAllTracksQuery } from '../redux/services/tracks'

function Main() {
  const { data, isLoading } = useGetAllTracksQuery()
  const { theme } = useThemeContext()

  return (
    <Styled.Container theme={theme}>
      <Styled.Main>
        <Nav />
        <ContentBlock tracks={data} isLoading={isLoading} />
        <SideBar />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Main
