import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { trackApi } from './services/tracks'

const store = configureStore({
  reducer: {
    user: userReducer,
    [trackApi.reducerPath]: trackApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
})
export default store
