import {configureStore} from '@reduxjs/toolkit'
import appReducer from '@/features/app/appSlice'
import userReducer from '@/features/user/userSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export type AppState = RootState['app']
export type UserState = RootState['user']