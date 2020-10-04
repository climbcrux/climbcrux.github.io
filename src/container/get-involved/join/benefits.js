import React, { Component } from 'react';

import Section from '../../../components/section/section';
import Button from '../../../components/button/button';
import Modal from '../../../components/modal/modal';
import { setPage } from '../../../virtualPage';

import section from '../../../components/section/section.cssm';

import styles from './join.cssm';
import { COVID } from '../COVID.js';


class Benefits extends Component {
  constructor(props) {
    super(props);
    setPage('/benefits', 'Benefits');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.container}>
        <Modal visible={true} size={'small'}>
          <COVID />
        </Modal>

        <Section style={{borderBottom: 'none'}}>
          <h1>Member Benefits</h1>
          <p>
          CRUX has been built in service to our mission: <strong>To expand access
          to rock climbing and outdoor recreation for LGBTQ communities in New
          York.</strong> But we can’t do this without the support of our members.
          Your membership helps us expand our reach, bringing climbing to LGBTQ
          people whouldn’t otherwise get to experience climbing – or who think
          that they don’t have a place within it. 
          </p>

          <p>
          Supporting CRUX also has its perks! Part of expanding access to rock
          climbing means making it easier and more fun for CRUX members to get
          out and climb. This is why your membership in CRUX gives you access to
          special members only climbing experiences as well as discounts to local
          climbing and recreational institutions.
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
          <div style={{textAlign: "center",
                       margin: "32px auto",
                       maxWidth: "113px",
                       fontSize: "16px"}}>
            <Button variant={"red"}
                    onClick={() => {this.props.history.goBack()}}>Join Now
            </Button>
          </div>
        </Section>
      </div
    >);
  }
};

export default Benefits;
