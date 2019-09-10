import * as React from 'react';
import {useState , useEffect} from 'react';
import { AppState } from './store/index'
import { itemState } from './store/items/types'
import { addNewItem, deleteSelectedItem } from './store/items/actions'
import {Item} from './store/items/types';
import { ReactReduxContextValue } from 'react-redux';



export const mapStateToProps = (state:AppState) => ({
  items: state.items
})

interface AppProps {
  items: itemState
  addNewItem?:typeof addNewItem
  deleteSelectedItem?:typeof deleteSelectedItem
  add:any
  del:any
}


export const App: React.FC<AppProps> = ({items, add, del}) => {

  return(
    <div className="App">
      {items.items && items.items.map((item, index) => <div key={index}>{item.name}</div>)}
      <button onClick={() => add({id:1, cost:10, name:'Chair', category:'Chair'})}>Add</button>
      <button onClick={() => del({name: 'Chair'})}>Delete</button>
    </div>
  );
}

export default App;
