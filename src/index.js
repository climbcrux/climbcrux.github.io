require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import AppWrap from './components/app-wrap/app-wrap';
import Home from './container/home/home';
import About from './container/about/about';
import Climbing from './container/climbing/climbing';
import Events from './container/event/event';
import Join from './container/join/join';
import MembershipForm from './container/membershipForm/membershipForm';

// Reducer & Store
import rootReducer from './reducer/root';
import createStoreMiddleware from './configStore';


const store = createStoreMiddleware(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWrap>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/climb" component={Climbing} />
        <Route path="/events" component={Events} />
        <Route path="/join" component={Join} />
        <Route path="/membership" component={MembershipForm} />
      </AppWrap>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.root')
);
