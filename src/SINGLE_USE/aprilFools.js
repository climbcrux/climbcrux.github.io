import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/section/section';

import styles from './aprilFools.cssm';


class AprilFools extends Component {
	constructor(props) {
		super(props);

		this.goTo = this.goTo.bind(this);
	}

	goTo(name) {
		this.props.history.push(name);
	}

  render() {
    return (
      <div className={styles.container}><Section>
				<img src={require('../media/AprilFools.png')} className={styles.image}/>
				<h1 style={{color: '#DB162F', fontWeight: 800}}>APRIL FOOOLS!</h1>
				<p>
					Well… Kinda. Mount Sunflower is real and it honestly is the highest 
					point in Kansas, but it is <b>definitely</b> not something
					you’d need to climb to get there. June 31st doesn’t exist, nor does…
					SOCK. But as you can see, it’s true: the approach is pretty easy. 
					More pics and info <a target="_blank" href="https://summitchicks.com/kansas/">
					click here</a> and <a
					href="https://en.wikipedia.org/wiki/Mount_Sunflower">here</a>.
				</p>
				<p>But <em>SINCE YOU’RE ALREADY HERE</em>…</p>
				<p>
					Our first <b>real</b> official scheduled outdoor trip is next month 
					and it’s in the city! 5/12 in Highbridge Park. You can sign up today
					on our Eventbrite <a target="_blank"
					href="https://www.eventbrite.com/e/crux-lgbtq-climbing-highbridge-rocks-community-festival-tickets-44609202325">by clicking here</a>.
				</p>
				<p>
					Are you a 2018 CRUX member? If not, sign up now while Membership
					Discounts are still in effect: <a onClick={() => this.goTo('/join')}>
					go here!</a>
				</p>
				<p>
					Indoors we have tons of things coming up, including Monday Night
					Heights tomorrow and April’s <b>Newbie Night</b> on Friday, April 6th!
					See all of our events on our <a onClick={() => this.goTo('/events')}>
					Calendar</a>
				</p>
				<p>
					And, finally, as with previous years, we’ll need some people to help
					us with one of our biggest initiatives of the year: PRIDE! We need your help.
					So if you can help us with Pride this year, please fill out the 
					<a target="_blank" href="https://goo.gl/gNVGUj"> Leadership Survey here
					</a> and indicate that you’re interested in helping with pride!
				</p>
			</Section></div>
    );
  }
}
export default AprilFools;
