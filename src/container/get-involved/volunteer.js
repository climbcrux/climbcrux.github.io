import React, { Component } from 'react';

import Section from '../../components/section/section';
import SubNav from '../../components/sub-nav/sub-nav';

import { setPage, recordOutbound } from '../../virtualPage';

import styles from './index.cssm';
import section from '../../components/section/section.cssm';


class Volunteer extends Component {
  constructor(props) {
    super(props);

    setPage('/volunteer', 'Volunteer');
  }

  render() {
    return (
      <div>
        { this.renderIndoorHost() }
        { this.renderOutdoorHost() }
        { this.renderLeadership() }
      </div>
    );
  }

  renderIndoorHost() {
    return (
      <Section name="event-host">
        <h1>Become a Host</h1>
        <p>
          Hosts bring a friendly face to every CRUX indoor climbing event.
          Belay new climbers and teach bouldering during Newbie Night, or
          introduce new members to other CRUXers during weekly climbing
          nights. Hosting is an easy way to give back to CRUX and meet other 
          climbers in the process.
        </p>
        <p>
          Becoming a host is easy
        </p>
        <ul>
          <li>
            Email our <a onClick={() => {
              recordOutbound('Host Signup');
            }} href="mailto:indoor@climbcrux.org">indoor
            programming team</a> and let them know your interested
          </li>
          <li>
            Receive a quick orientation during any CRUX indoor event
          </li>
          <li>
            Get setup with a CRUX Slack account for our hosts channel
          </li>
          <li>
            Signup to host your first event!
          </li>
        </ul>
      </Section>
    );
  }

  renderOutdoorHost() {
    return (
      <Section name="trip-leader">
        <h1>Lead a Trip</h1>
          <p>
            Take the lead with CRUX! Lead trips to your favorite destinations
            by becoming an Outdoor Leader or Assistant Leader. You’ll get to
            share the wealth of knowledge you’ve obtained and pay it forward.
            Take charge and welcome newer outdoor climbers to your favorite
            crags!
          </p>
          <div className={styles.action}>
            <a onClick={() => {
              recordOutbound('Outdoor Leader Signup')
            }} href="https://goo.gl/forms/BgLwnBDnY7tYi3wz1">Sign Up Here</a>
          </div>
      </Section>
    );
  }

  renderCommittee() {
    return (
      <Section name="committee">
        <h1>Join a Committee</h1>
      </Section>
    );
  }

  renderLeadership() {
    return (
      <Section name="leadership">
        <h1>Apply to Leadership</h1>
        <p>
          Looking to go futher and help shape the future of LGBTQ climbing
          in New York? Apply to become one of the next leaders of CRUX!
        </p>
        <div className={section.columns}>
          <div className={section.row}>
            <h5>Programs</h5>
            <p>
            Lead CRUX in expanding access to rock climbing through indoor
            events, outdoor trips, and via various outreach efforts.
            </p>
          </div>
          <div className={section.row}>
            <h5>Communication</h5>
            <p>
            Spread the word about CRUX around the internet and beyond. Currate
            posts on social media, collborate on CRUX’s email campaigns, and
            help write content for the CRUX website.
            </p>
          </div>
          <div className={section.row}>
            <h5>Development</h5>
            <p>
            CRUX relies on charitable donations to fund our programs and help
            us further our missions of empowering LGTBQ communities through
            rock climbing. Share your enthusiasm for our cause and build
            relationships with the community while raising money for CRUX.
            </p>
          </div>
          <div className={section.row}>
            <h5>Board of Directors</h5>
            <p>
            Shape CRUX’s mission, strategy and goals by joining the Board of
            Directors. Directors oversee operations, ensure legal compliance,
            and safeguard CRUX’s finances.
            </p>
          </div>
        </div>
        <div className={styles.action} style={{paddingBottom: "32px"}}>
          <a onClick={() => {
            recordOutbound('Leadership Questionnaire')
          }} href="https://goo.gl/forms/kGBuFCBtq8xfap7H3">Apply Here</a>
        </div>
      </Section>
    );
  }
}
export default Volunteer;
