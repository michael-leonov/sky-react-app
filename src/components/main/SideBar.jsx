/* eslint-disable global-require */
import React from 'react'
import Personal from './sidebar/Personal'
import SidebarItem from './sidebar/SidebarItem'
import * as Styled from './styles/side-bar-styles'

function SideBar() {
  return (
    <Styled.SideBarWrapper>
      <Personal />
      <Styled.SideBarBlock>
        <Styled.SideBarList>
          <SidebarItem
            imgPath={require('./sidebar/img/playlist01.png')}
            alt="day's playlist"
            link="/playlist/1"
          />
          <SidebarItem
            imgPath={require('./sidebar/img/playlist02.png')}
            alt="day's playlist"
            link="/playlist/2"
          />
          <SidebarItem
            imgPath={require('./sidebar/img/playlist03.png')}
            alt="day's playlist"
            link="/playlist/3"
          />
        </Styled.SideBarList>
      </Styled.SideBarBlock>
    </Styled.SideBarWrapper>
  )
}

export default SideBar
