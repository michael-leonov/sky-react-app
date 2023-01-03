import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { trackApi } from './services/tracks'
import playerReducer from './slices/playerSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    player: playerReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
})
export default store
