import * as React from 'react';
import { History } from 'history'
import {useState , useEffect} from 'react';
import { Route } from 'react-router-dom'
import { AppState } from './store/index'
import { itemState } from './store/items/types'
import { addNewItem, deleteSelectedItem } from './store/items/actions'
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react'

// Components
import Header from './components/header/Header'
import Categories from './components/categories/Categories'



export const mapStateToProps = (state:AppState) => ({
  items: state.items
})

interface AppProps {
  items: any
  addNewItem?:typeof addNewItem
  deleteSelectedItem?:typeof deleteSelectedItem
  add:any
  del:any
}


export const App: React.FC<AppProps> = ({items, add, del}) => {

  function addItem(item:object) {
    add(item)
  }

  function deleteItem(item:object) {
    del(item)
  }

  const stackTokens:IStackTokens = { childrenGap: 40 }

  return(
    <div className="App">
      <Route path='/' render={({ history }) => <Header history={history} />} />
      <Route path='/categories' render={() => <Categories items={items} />} />
      {/* {items.items && items.items.map((item, index) => <div key={index}>{item.name}</div>)}
      <Stack horizontal={true} tokens={stackTokens}>
        <PrimaryButton text='Add To Cart' onClick={() => addItem({id:1, cost:10, name:'Chair', category: 'Seating'})} />
      </Stack> */}
    </div>
  );
}

export default App;
