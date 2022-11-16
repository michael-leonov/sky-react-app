/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import Nav from './main/Nav'
import ContentBlock from './main/ContentBlock'
import SideBar from './main/SideBar'
import Bar from './bar/Bar'
import * as Styled from './main-styles'
import baseUrl from '../constants'
import { useThemeContext } from '../context/theme'

function Main() {
  const [isLoading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])
  const { theme } = useThemeContext()

  useEffect(() => {
    fetch(`${baseUrl}catalog/track/all/`)
      .then((res) => res.json())
      .then((json) => {
        setTracks(json)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Styled.Container theme={theme}>
      <Styled.Main>
        <Nav />
        <ContentBlock tracks={tracks} isLoading={isLoading} />
        <SideBar />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Main
