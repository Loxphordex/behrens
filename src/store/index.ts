import { combineReducers } from 'redux'
import { itemReducer } from './items/reducers'
import { categoryReducer } from './categories/reducers'

import { Item } from './items/types'
import { addNewItem, deleteSelectedItem } from './items/actions'
import { populateCategories, chooseCategory, clearCategory } from './categories/actions'

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer
})

export const mapDispatchToProps = (dispatch:any) => {
  return {
    add(item:Item) {
      dispatch(addNewItem(item))
    },
    del(item:Item) {
      dispatch(deleteSelectedItem(item))
    },
    populate(categories:string[]) {
      dispatch(populateCategories(categories))
    },
    chooseCat(category:string) {
      dispatch(chooseCategory(category))
    },
    clearCats() {
      dispatch(clearCategory())
    }
  }
}

export type AppState = ReturnType<typeof rootReducer>