import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseUrl from '../../constants'

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),

    getTrack: builder.query({
      query: (trackId) => `catalog/track/${trackId}`,
    }),

    addToFavorite: builder.mutation({
      query: (track) => ({
        url: `${baseUrl}catalog/track/${track.id}/favorite/`,
        method: 'POST',
        prepareHeaders: (headers) => {
          const token = localStorage.getItem('userToken')
          console.log(token)

          // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }

          console.log(headers)

          return headers
        },
      }),
    }),

    deleteFromFavorite: builder.mutation({
      query: (track) => ({
        url: `${baseUrl}catalog/track/${track.id}/favorite/`,
        method: 'DELETE',
      }),
    }),

    getAllSelection: builder.query({
      query: () => 'catalog/selection/',
    }),

    getSelection: builder.query({
      query: (selectionId) => `catalog/selection/${selectionId}/`,
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetTrackQuery,
  useAddToFavoriteMutation,
  useDeleteFromFavoriteMutation,
  useGetAllSelectionQuery,
  useGetSelectionQuery,
} = trackApi
