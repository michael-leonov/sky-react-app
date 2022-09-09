import React from 'react'
import Nav from './main/Nav'
import ContentBlock from './main/ContentBlock'
import SideBar from './main/SideBar'
import Bar from './bar/Bar'

function Main() {
  return (
    <div className="container">
      <main className="main">
        <Nav />
        <ContentBlock />
        <SideBar />
      </main>
      <Bar />
    </div>
  )
}

export default Main
