import * as React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { AppState } from './store/index'
import { productState } from './store/products/types'
import { addNewItem, deleteSelectedItem } from './store/items/actions'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { setIconOptions } from 'office-ui-fabric-react/lib/Styling';

// Components
import Header from './components/header/Header'
import { LandingPage } from './components/landing/LandingPage'
import Gallery from './components/gallery/Gallery'
import { Cart } from './components/cart/Cart'
import ProductInfo from './components/product-info/ProductInfo'

// Data
import { productData } from './data/product-data'
import { imagesStore } from './images/images-export'

/**
 * TODO
  Create item details list
    -Add to cart button
  Utilize shopping cart
  Create cart page
    -Display all selected items
    -Show total price plus tax
  Create checkout page
    -Card form
    -Address
    -Add tax to total
    -Checkout confirmation, then clear cart
  (optional) add more styling to landing page
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
  setIconOptions({ disableWarnings: true });
  function mapProductsToState() {
    productData.map(product => {
      addProd(product)
      return product
    })
  }

  useEffect(() => {
    mapProductsToState()
  }, [])

  return(
    <div className="App">
      <Route path='/' render={({ history }) => <Header history={history} />} />
      <Route exact={true} path='/' render={({ history }) => <LandingPage history={history} />} />
      <Route path='/categories/:category' render={() => <Gallery products={products.products} imagesStore={imagesStore} />} />
      <Route path='/cart' render={() => <Cart items={items} del={del} />} />
      <Route path='/info/:id' render={() => <ProductInfo products={products} add={add} />} />
    </div>
  );
}

export default App;
