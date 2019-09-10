import React from 'react';
import { AppState } from './store/index'
import { itemState } from './store/items/types'
import { addNewItem, deleteSelectedItem } from './store/items/actions'

export const mapStateToProps = (state:AppState) => ({
  items: state.items
})

interface AppProps {
  items?:itemState
  addNewItem?:typeof addNewItem
  deleteSelectedItem?:typeof deleteSelectedItem
}


class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <div>
          Something
        </div>
      </div>
    );
  }
}

export default App;
