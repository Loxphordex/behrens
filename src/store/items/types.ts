export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export interface Item {
  id:number
  cost:number
  name:string
  category:string
}

export interface itemState {
  items: Item[]
}

interface addItemAction {
  type: typeof ADD_ITEM,
  payload: Item
}

interface deleteItemAction {
  type: typeof DELETE_ITEM,
  payload: Item
}

export type itemActionTypes = addItemAction | deleteItemAction

