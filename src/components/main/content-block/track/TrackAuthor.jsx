import React from 'react'

function TrackAuthor({ author }) {
  return (
    <div className="track__author">
      <a className="track__author-link" href="http://">
        {author}
      </a>
    </div>
  )
}

export default TrackAuthor
