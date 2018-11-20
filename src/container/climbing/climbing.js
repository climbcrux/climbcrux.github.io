import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Element, scrollSpy, scroller } from 'react-scroll';

import Event from '../../components/event/event';
import Section from '../../components/section/section';
import SubNav from '../../components/sub-nav/sub-nav';
import ToggleList from '../../components/toggle-list/toggle-list';

import { setPage } from '../../virtualPage';

import { QUESTIONS } from './question-answer';
import { EVENTS } from './events';

import styles from './climbing.cssm';


class Climbing extends Component {
  constructor(props) {
    super(props);
    setPage('/climbing', 'Climbing');
  }

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <div className={styles.container}>
        <SubNav tabs={[
          'getting-started',
          'regular-events',
          'outdoor'
        ]} />

        { this.renderGettingStarted() }
        { this.renderEvents() }
        { this.renderOutdoor() }
      </div>
    );
  }

  goTo(name) {
    this.props.history.push(name);
  }

  renderGettingStarted = () => {
    return (
      <Section name="getting-started">

				<h1>Getting Started</h1>
				<p>
            Have you dreamed of scaling rock faces in Yosemite? Want to be like
            the badass climbers on American Ninja Warrior? Or simply want to
            see what everyone’s been raving about? Well, now’s your chance!
				</p>
				<p>
            Rock climbing is a physically, mentally, and emotionally
            challenging and rewarding sport. It not only hones the body and
            builds endurance, but develops problem solving skills, boosts
            memory and creativity, eases anxiety, and reduces stress. Best yet,
            rock climbing has something to offer for everyone!  Regardless of
            age, fitness level, or disability status; if you have the ability
            to pull yourself up a ladder, you can rock climb!
				</p>
				<p>
            CRUX offers a safe space for members of the LGBTQ community in NY
            to join together in experiencing the sport of rock climbing.
				</p>
				<p>
            To learn more about CRUX, our events, and the sport of rock
            climbing, read our <Link to="faq" smooth={true} duration={250}>
            first-timer FAQ </Link>, check out our <a onClick={() =>
            this.goTo({pathname: '/events'})} className={styles.link}> Events
            Calendar</a>, or Contact Us directly with questions, concerns, or
            to just say hi!
				</p>

				<Element name="faq">
					<h1 style={{marginBottom: '20px'}}>FAQ</h1>
					<ToggleList items={QUESTIONS} />
				</Element>
      </Section>
    );
  }

  renderEvents() {
    return (
      <Section name="regular-events">
        <h1>Events</h1>
        <div className={styles.events}>{EVENTS}</div>
      </Section>
    );
  }

  renderGyms() {
    return (
      <Section name="where-we-climb">
      </Section>
    );
  }

  renderOutdoor() {
    return (
      <Section name="outdoor">
        <h1>Outdoor Program</h1>
				<p>
          Every spring through autumn CRUX spends many weekends out of the city
          climbing at crags up and down the East Coast. Trips range from single
          day excursions in and around NYC, to longer week and weekend trips to
          world-renowned East Coast climbing destinations. Trips are open to
          all CRUX members, pending skill requirements needed to climb at a
          crag.
				</p>
				<p>
          We take care to design trips for climbers of every ability level and
          climbing interest.
        </p>

				<h4>Regular Events Include</h4>
				<ul>
					<li>All levels top-roping trips to the Shawangunk mountains</li>
					<li>Top roping trip for intermediate climbers to Powerlinez</li>
					<li>Sport lead trips to Birdsboro</li>
					<li>Holiday weekend sport lead trips to Rumney</li>
					<li>Spring break in the Red River Gorge</li>
					<li>New River Gorge for Homoclimbtastic</li>
				</ul>

				<p>
          Our outdoor programing also includes outdoor climbing education
          courses taught by guides from the EMS School in New Paltz. Course
          choices are dictated by the needs and interests of our members.
				</p>
				<h4>Classes previously sponsored include</h4>
				<ul>
					<li>Winter Ice Climbing</li>
					<li>Top Rope Anchor Building</li>
					<li>Self-Rescue</li>
				</ul>

				<p>
          Check out our Calendar for more information on upcoming climbing
          trips.  If you have any questions about which trips are most suitable
          for your ability level feel free to email our outdoor coordinator <a
          href="mailto:outdoor@climbcrux.org" target="_top">here</a>.
				</p>
      </Section>
    );
  }

};
export default withRouter(Climbing);
