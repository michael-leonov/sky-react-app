import React, { useState } from 'react'
import likeIcon from '../../../img/sprite.svg'
import * as Styled from './styles/track-time-styles'
import {
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
} from '../../../../redux/services/tracks'

function TrackTime({ trackId, time }) {
  const min = Math.floor(time / 60)
  const secs = time % 60

  const formatedTime = [min.toString(), secs.toString().padStart(2, '0')].join(
    ':'
  )

  const [addToFavorite] = useAddToFavoriteMutation()
  const [deleteFromFavorite] = useDeleteFromFavoriteMutation()

  const [isLoading, setLoading] = useState(false) // Как дизейблить кнопку при срабатывании useAddToFavoriteMutation или useDeleteFromFavoriteMutation
  const [isLike, setLike] = useState(false)

  const handleAddToFavorite = (e) => {
    e.stopPropagation()
    setLoading(true)
    addToFavorite({ id: trackId })
    setLike(!isLike)
    setLoading(false)
  }

  const handleDeleteFromFavorite = (e) => {
    e.stopPropagation()
    setLoading(true)
    deleteFromFavorite({ id: trackId })
    setLike(!isLike)
    setLoading(false)
  }

  return (
    <div>
      <Styled.TrackLikeImg
        alt="like"
        onClick={isLike ? handleDeleteFromFavorite : handleAddToFavorite}
        isLike={isLike}
        disabled={isLoading}
      >
        <use xlinkHref={`${likeIcon}#icon-like`} />
      </Styled.TrackLikeImg>
      <Styled.TrackTimeText>{formatedTime}</Styled.TrackTimeText>
    </div>
  )
}

export default TrackTime
