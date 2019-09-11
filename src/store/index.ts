import { combineReducers } from 'redux'
import { itemReducer } from './items/reducers'
import { categoryReducer } from './categories/reducers'
import { productReducer } from './products/reducers'

import { Item } from './items/types'
import { Product } from './products/types'

import { addNewItem, deleteSelectedItem } from './items/actions'
import { populateCategories, chooseCategory, clearCategory } from './categories/actions'
import { addProduct } from './products/actions'

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer,
  products: productReducer,
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
    },
    addProd(product:Product) {
      dispatch(addProduct(product))
    }
  }
}

export type AppState = ReturnType<typeof rootReducer>