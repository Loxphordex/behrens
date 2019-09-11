import * as React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { AppState } from './store/index'
import { productState } from './store/products/types'
import { addNewItem, deleteSelectedItem } from './store/items/actions'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// Components
import Header from './components/header/Header'
import Gallery from './components/gallery/Gallery'

/**
 * TODO
  Gather images
  Setup category list
  Create dummy data
  Create furniture lists
  Create item details list
  Create landing page
  Use hooks somehow (probably for unmounting from selected category component)
 */

export const mapStateToProps = (state:AppState) => ({
  items: state.items,
  products: state.products,
})

interface AppProps {
  items: any
  addNewItem?:typeof addNewItem
  deleteSelectedItem?:typeof deleteSelectedItem
  add:any
  del:any
  products:productState
  addProd:any
}


export const App: React.FC<AppProps> = ({items, add, del, addProd, products}) => {
  initializeIcons()

  // useEffect(() => {
    
  // })

  const categories = [
    'Living',
    'Dining',
    'Bedroom',
    'Office',
  ]

  return(
    <div className="App">
      <Route path='/' render={({ history }) => <Header history={history} />} />
      <Route path='/categories/:category' render={() => <Gallery products={products.products} />} />
    </div>
  );
}

export default App;
