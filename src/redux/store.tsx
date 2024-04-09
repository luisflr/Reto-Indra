import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import planReducer from './planSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch