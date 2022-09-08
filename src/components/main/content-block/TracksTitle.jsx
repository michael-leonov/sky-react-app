import React from 'react'

function TracksTitle({ title, index }) {
  return <div className={`playlist-title__col col0${index}`}>{title}</div>
}

export default TracksTitle
