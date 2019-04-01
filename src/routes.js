import React from 'react';
import {
	BrowserRouter,
  HashRouter,
	Redirect,
	Route
} from 'react-router-dom';

import AppWrap from './components/common/wrap';

import Home from './container/home/home';
import About from './container/about/about';
import Climbing from './container/climbing/climbing';
import Events from './container/event/event';

import GetInvolved from './container/get-involved/index';
import Join from './container/get-involved/join/join';
import Volunteer from './container/get-involved/volunteer';
import Donate from './container/get-involved/donate';
import Benefits from './container/get-involved/join/benefits';
import MembershipForm from './container/get-involved/membershipForm/membershipForm';

import AprilFools from './SINGLE_USE/aprilFools';


export const Routes = (
	<HashRouter>
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

			<Route path="/get-involved" component={GetInvolved} />
			<Route path="/join" component={Join} />
			<Route path="/register*" render={() => {
				return <Redirect to="/join" />
			}} />
			<Route path="/donate" component={Donate} />
			<Route path="/volunteer" component={Volunteer} />

			<Route path="/benefits" component={Benefits} />
			<Route path="/membership" component={MembershipForm} />

			<Route path="/CRUXupfront" component={AprilFools} />
		</AppWrap>
	</HashRouter>
);
