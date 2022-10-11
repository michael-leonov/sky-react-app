import React from 'react'
import Personal from './sidebar/Personal'
import SidebarItem from './sidebar/SidebarItem'

function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem
            imgName="playlist01.png"
            alt="day's playlist"
          />
          <SidebarItem
            imgName="playlist02.png"
            alt="day's playlist"
          />
          <SidebarItem
            imgName="playlist03.png"
            alt="day's playlist"
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar
