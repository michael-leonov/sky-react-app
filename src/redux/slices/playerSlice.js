/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSongs: [],
  isActive: false,
  isPlaying: false,
  activeSong: {},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSongs: (state, action) => {
      state.currentSongs = action.payload
    },

    setActiveSong: (state, action) => {
      state.activeSong = action.payload
      state.isActive = true
      state.isPlaying = true
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload
    },
  },
})

export const { setCurrentSongs, setActiveSong, playPause } = playerSlice.actions

export default playerSlice.reducer
