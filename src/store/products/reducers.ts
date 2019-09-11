import {
  productState,
  productActionTypes,
  ADD_PRODUCT
} from './types'

const initialState:productState = {
  products: []
}

export function productReducer(
  state=initialState,
  action:productActionTypes):productState {
  
  switch(action.type) {
    case ADD_PRODUCT:
      return { products: [ ...state.products, action.product ] }
  
  default:
    return state
  }
}