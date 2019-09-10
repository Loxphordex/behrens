import { combineReducers } from 'redux'
import { itemReducer } from './items/reducers'

export const rootReducer = combineReducers({
  items: itemReducer
})

export type AppState = ReturnType<typeof rootReducer>