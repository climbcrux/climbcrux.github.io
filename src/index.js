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
import Benefits from './container/join/benefits';
import MembershipForm from './container/membershipForm/membershipForm';

//import AprilFools from './SINGLE_USE/aprilFools';
//import Outdoor2018 from './SINGLE_USE/outdoor_2018';

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
        <Route path="/home" render={() => {
          return <Redirect to="/" />
        }} />

        <Route path="/about" component={About} />
        <Route path="/contact-us" render={() => {
          return <Redirect to="/about#contact" />
        }} />

        <Route exact path="/climb" component={Climbing} />
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
        <Route path="/register*" render={() => {
          return <Redirect to="/join" />
        }} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/membership" component={MembershipForm} />

        <Route path="/crux_goes_to_MtSunflower" render={() => {
          return <Redirect to="/" />
        }} />

      </AppWrap>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.root')
);
