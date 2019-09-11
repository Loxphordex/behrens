import {
  Product,
  productActionTypes,
  ADD_PRODUCT
} from './types'

export function addProduct(product: Product): productActionTypes {
  return {
    type: ADD_PRODUCT,
    product
  }
}