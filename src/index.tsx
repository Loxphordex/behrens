import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { mapStateToProps } from './App'
import { mapDispatchToProps } from './store/items/actions'
import { rootReducer } from './store/index'
import './index.css';
import App from './App';

const store = createStore(rootReducer)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}><ConnectedApp /></Provider>, 
  document.getElementById('root'));
