import {
  productState,
  productActionTypes,
  ADD_PRODUCT,
  GET_PRODUCT
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

    case GET_PRODUCT:
      return { products: [ ...state.products, state.products[action.id]]}
  
  default:
    return state
  }
}