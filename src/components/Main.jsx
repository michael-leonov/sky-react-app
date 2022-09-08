import React from 'react'
import Nav from './main/Nav'
import ContentBlock from './main/ContentBlock'

function Main() {
  return (
    <div className="container">
      <main className="main">
        <Nav />
        <ContentBlock />
      </main>
    </div>
  )
}

export default Main
