import React from 'react'
import * as Styled from './styles/side-bar-item-styles'

function SidebarItem({ imgPath, alt, href }) {
  return (
    <Styled.SideBarItem>
      <Styled.SideBarLink href={href}>
        <Styled.SideBarImg src={imgPath} alt={alt} />
      </Styled.SideBarLink>
    </Styled.SideBarItem>
  )
}

export default SidebarItem
