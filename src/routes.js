import React from 'react';
import {
	BrowserRouter,
	Redirect,
	Route
} from 'react-router-dom';

import AppWrap from './components/common/wrap';

import Home from './container/home/home';
import About from './container/about/about';
import Climbing from './container/climbing/climbing';
import Events from './container/event/event';
import Join from './container/join/join';
import Benefits from './container/join/benefits';
import MembershipForm from './container/membershipForm/membershipForm';


export const Routes = (
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
);
