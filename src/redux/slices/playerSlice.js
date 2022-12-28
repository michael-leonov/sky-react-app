/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSongs: [],
  isActive: false,
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
    },
  },
})

export const { setCurrentSongs, setActiveSong } = playerSlice.actions

export default playerSlice.reducer
