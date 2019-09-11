export const ADD_PRODUCT = 'ADD_PRODUCT'

export interface Product {
  id:number
  cost:number
  name:string
  category:string,
  dataName:string,
}


export interface productState {
  products: Product[]
}

interface addProduct {
  type: typeof ADD_PRODUCT,
  product: Product
}

export type productActionTypes = addProduct