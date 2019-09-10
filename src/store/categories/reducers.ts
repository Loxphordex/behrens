import {
  categoryState,
  categoryActionTypes,
  POPULATE_CATEGORIES,
  CHOOSE_CATEGORY,
  CLEAR_CATEGORY
} from './types'

const initialState:categoryState = {
  categories: [],
  currentView: ''
}

export function categoryReducer(
  state=initialState,
  action:categoryActionTypes):categoryState {
  switch(action.type) {
    case POPULATE_CATEGORIES:
      return { 
        categories: [ ...state.categories, ...action.population ],
        currentView: ''
      }
    
    case CHOOSE_CATEGORY:
      return {
        categories: [ ...state.categories ],
        currentView: action.selection
      }
    
    case CLEAR_CATEGORY:
      return {
        categories: [ ...state.categories ],
        currentView: ''
      }

    default:
      return state
  }
}