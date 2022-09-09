import React from 'react'

function TrackAlbum({ album }) {
  return (
    <div className="track__album">
      <a className="track__album-link" href="http://">
        {album}
      </a>
    </div>
  )
}

export default TrackAlbum
