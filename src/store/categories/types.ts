export const POPULATE_CATEGORIES = 'POPULATE_CATEGORIES'
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY'
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY'

export interface categoryState {
  categories:string[]
  currentView:string
}

interface addCategories {
  type: typeof POPULATE_CATEGORIES,
  population: string[]
}

interface chooseCategory {
  type: typeof CHOOSE_CATEGORY,
  selection: string
}

interface clearCategory {
  type: typeof CLEAR_CATEGORY
}

export type categoryActionTypes = (addCategories | chooseCategory | clearCategory)