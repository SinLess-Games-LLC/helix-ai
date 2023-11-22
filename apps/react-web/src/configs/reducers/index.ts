import { combineReducers } from '@reduxjs/toolkit'
import { UserReducer } from './user.reducer'

export const RootReducer = combineReducers({
  user: UserReducer,
})
