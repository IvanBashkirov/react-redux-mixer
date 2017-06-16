import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import mixerApp from './reducers'
import './index.css';

let store = createStore(mixerApp);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
