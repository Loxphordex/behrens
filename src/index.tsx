import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { mapStateToProps } from './App'
import { mapDispatchToProps } from './store/index'
import { rootReducer } from './store/index'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

const store = createStore(rootReducer)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  (
  <BrowserRouter>
    <Provider store={store}><ConnectedApp /></Provider>
  </BrowserRouter>
  ),
  document.getElementById('root'));
