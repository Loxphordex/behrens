import {
  itemState,
  ADD_ITEM,
  DELETE_ITEM,
  itemActionTypes
} from './types'

const initialState:itemState = {
  items: []
}

export function itemReducer(
  state=initialState, 
  action:itemActionTypes):itemState {
  switch(action.type) {
    case ADD_ITEM:
      return { items: [...state.items, action.payload] }

    case DELETE_ITEM:
      return { items: state.items.filter(item => item.name !== action.payload.name) }

    default:
      return state
  }
}