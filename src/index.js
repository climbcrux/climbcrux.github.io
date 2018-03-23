require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';

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

// Init GA
ReactGA.initialize('UA-44939665-2');

const store = createStoreMiddleware(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWrap>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/contact-us" render={() => {
          return <Redirect to="/about#contact" />
        }} />

        <Route path="/climb" component={Climbing} />
        <Route path="/crux-regular-events" render={() => {
          return <Redirect to="/climb#regular-events" />
        }} />
        <Route path="/what-is-rock-climbing/beginner-faq" render={() => {
          return <Redirect to="/climb#faq" />
        }} />

        <Route exact path="/events" component={Events} />
        <Route path="/events*" render={() => {
          return <Redirect to="/events" />
        }} />

        <Route path="/join" component={Join} />
        <Route path="/membership" component={MembershipForm} />

      </AppWrap>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.root')
);
