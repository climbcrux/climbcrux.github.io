require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import rootReducer from './reducer/root';
import createStoreMiddleware from './store/configStore';
import { Routes } from './routes';

// Init GA
ReactGA.initialize('UA-44939665-2');

const store = createStoreMiddleware(rootReducer);
const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('.root')
);
