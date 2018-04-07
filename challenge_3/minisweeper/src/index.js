import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import './styles/index.css';
// import Minesweeper from './reducers/minesweeper';
import App from './components/containers/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store = { store }>
    <App store = { store }/>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
