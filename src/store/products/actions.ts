import {
  Product,
  productActionTypes,
  ADD_PRODUCT,
  GET_PRODUCT
} from './types'

export function addProduct(product: Product): productActionTypes {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export function getProduct(id: number): productActionTypes {
  return {
    type: GET_PRODUCT,
    id
  }
}