import {  
  categoryActionTypes,
  POPULATE_CATEGORIES,
  CHOOSE_CATEGORY,
  CLEAR_CATEGORY } from './types'

export function populateCategories(categories:string[]):categoryActionTypes {
  return {
    type: POPULATE_CATEGORIES,
    population: categories
  }
}

export function chooseCategory(category:string):categoryActionTypes {
  return {
    type: CHOOSE_CATEGORY,
    selection: category
  }
}

export function clearCategory():categoryActionTypes {
  return {
    type: CLEAR_CATEGORY
  }
}