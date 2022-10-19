import React from 'react'
import * as Styled from './styles/personal-styles'

function Personal({ name }) {
  return (
    <Styled.SideBarPersonal>
      <Styled.SideBarPersonalName>{name}</Styled.SideBarPersonalName>
      <Styled.SideBarPersonalAvatar />
    </Styled.SideBarPersonal>
  )
}

export default Personal
