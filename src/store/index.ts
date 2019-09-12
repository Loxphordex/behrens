import { combineReducers } from 'redux'
import { itemReducer } from './items/reducers'
import { productReducer } from './products/reducers'

import { Item } from './items/types'
import { Product } from './products/types'

import { addNewItem, deleteSelectedItem } from './items/actions'
import { addProduct, getProduct } from './products/actions'

export const rootReducer = combineReducers({
  items: itemReducer,
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
    addProd(product:Product) {
      dispatch(addProduct(product))
    },
    getProd(id:number) {
      dispatch(getProduct(id))
    }
  }
}

export type AppState = ReturnType<typeof rootReducer>