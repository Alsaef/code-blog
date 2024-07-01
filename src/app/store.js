import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/Auth/authSlice'
import { apiSlice } from '../features/Api/apiSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})