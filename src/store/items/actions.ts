import { Item, ADD_ITEM, DELETE_ITEM, itemActionTypes } from './types'

export function addNewItem(newItem:Item):itemActionTypes {
  return {
    type: ADD_ITEM,
    payload: newItem
  }
}

export function deleteSelectedItem(selectedItem:Item):itemActionTypes {
  return {
    type: DELETE_ITEM,
    payload: selectedItem
  }
}

export const mapDispatchToProps = (dispatch:any) => {
  return {
    add(item:Item) {
      dispatch(addNewItem(item))
    },
    del(item:Item) {
      dispatch(deleteSelectedItem(item))
    }
  }
}