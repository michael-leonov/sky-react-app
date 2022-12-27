/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react'
import Personal from './sidebar/Personal'
import SidebarItem from './sidebar/SidebarItem'
import * as Styled from './styles/side-bar-styles'
import { useGetAllSelectionQuery } from '../../redux/services/tracks'

function SideBar() {
  const { data } = useGetAllSelectionQuery()
  return (
    <Styled.SideBarWrapper>
      <Personal />
      <Styled.SideBarBlock>
        <Styled.SideBarList>
          {data &&
            data.map((selection) => (
              <SidebarItem
                key={selection.id}
                imgPath={require(`./sidebar/img/playlist0${selection.id}.png`)}
                alt={`day's playlist #${selection.id}`}
                link={`/playlist/${selection.id}`}
              />
            ))}
        </Styled.SideBarList>
      </Styled.SideBarBlock>
    </Styled.SideBarWrapper>
  )
}

export default SideBar
