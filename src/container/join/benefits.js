import React, { Component } from 'react';

import Section from '../../components/section/section';
import { setPage } from '../../virtualPage';

import section from '../../components/section/section.cssm';
import styles from './join.cssm';


class Benefits extends Component {
  constructor(props) {
    super(props);
    setPage('/benefits', 'Benefits');

    this.goToJoin = this.goToJoin.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToJoin() {
    this.props.history.push('join');
  }

  render() {
    return (
    <div className={styles.container}>
      <Section style={{borderBottom: 'none'}}>
        <h1>Member Benefits</h1>
        <p>
        CRUX has been built in service to our mission: <strong>To expand access
        to rock climbing and outdoor recreation for LGBTQ communities in the New
        York metro area and eastern New York.</strong> But we can’t do this
        without the support of our members. Your membership helps us reach more
        people and expand access to climbing for LGBTQ people who typically
        cannot access climbing – or who think that they don’t have a place
        within it. 
        </p>

        <p>
        Supporting CRUX also has its perks! Part of expanding access to rock
        climbing means making it easier and more fun for CRUX members to get out
        and climb. This is why your membership in CRUX gives you access to
        special members only climbing experiences and discounts to local climbing
        and recreational institutions.
        </p>

        <h4>Your membership gets you access to</h4>

        <div className={section.columns}>
          <div className={section.row}>
            <h5>Indoor</h5>
            <ul>
              <li>Free Intro to Climbing class during Monday Night Heights</li>
              <li>$25 day pass during CRUX events at The Cliffs LIC</li>
              <li>$10 off Cliffs monthly membership</li>
              <li>New member initiation fee waived at The Cliffs</li>
              <li>50% off Cliffs Learn to Lead class when organized through
              CRUX</li>
            </ul>
          </div>
          <div className={section.row}>
            <h5>Outdoor</h5>
            <ul>
              <li>Access to all CRUX outdoor trips including all-levels,
              park bouldering, and sport lead trips</li>
              <li>Discounted outdoor classes with the EMS School when organized
              through CRUX</li>
            </ul>
          </div>
          <div className={section.row}>
            <h5>Social</h5>
            <ul>
              <li>Invitation to annual CRUX Holiday Party</li>
              <li>Invitation to yearly Member Appreciation Trip. Recent trips
              have included river tubing, ropes courses, and day at
              adventure/amusement parks.</li>
            </ul>
          </div>
          <div className={section.row}>
            <h5>And More</h5>
            <ul>
              <li>$5 off CRUX t-shirts and tanks</li>
              <li>More in the works</li>
            </ul>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: "28px", fontSize: "16px"}}>
          <a onClick={this.goToJoin}>Join Now</a>
        </div>
      </Section>
    </div>);
  }
};

export default Benefits;
