/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Styled from '../../components/main-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import Bar from '../../components/bar/Bar'
import baseUrl from '../../constants'

function Playlist() {
  const params = useParams()
  const [selection, setSelection] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${baseUrl}catalog/selection/${Number(params.id)}`)
      .then((res) => res.json())
      .then((json) => {
        setSelection(json)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock tracks={selection.items} isLoading={isLoading} />
      </Styled.Main>
      <Bar />
    </Styled.Container>
  )
}

export default Playlist
