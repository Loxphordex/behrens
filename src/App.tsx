import * as React from 'react';
import { Route } from 'react-router-dom'
import { AppState } from './store/index'
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
  categories: state.categories
})

interface AppProps {
  items: any
  addNewItem?:typeof addNewItem
  deleteSelectedItem?:typeof deleteSelectedItem
  add:any
  del:any
}


export const App: React.FC<AppProps> = ({items, add, del}) => {

  // function addItem(item:object) {
  //   add(item)
  // }

  // function deleteItem(item:object) {
  //   del(item)
  // }

  // const stackTokens:IStackTokens = { childrenGap: 40 }

  initializeIcons()

  const categories = [
    'Living',
    'Dining',
    'Bedroom',
    'Office',
  ]

  return(
    <div className="App">
      <Route path='/' render={({ history }) => <Header history={history} />} />
      <Route path='/categories/:category' render={() => <Gallery products={categories} category={'placeholder'} />} />
      {/* {items.items && items.items.map((item, index) => <div key={index}>{item.name}</div>)}
      <Stack horizontal={true} tokens={stackTokens}>
        <PrimaryButton text='Add To Cart' onClick={() => addItem({id:1, cost:10, name:'Chair', category: 'Seating'})} />
      </Stack> */}
    </div>
  );
}

export default App;
