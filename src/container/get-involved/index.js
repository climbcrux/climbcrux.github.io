import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../../components/section/section';

import Event from '../../components/event/event';
import Button from '../../components/button/button';
import { setPage } from '../../virtualPage';

import styles from './index.cssm';


class Contribute extends Component {
  constructor(props) {
    super(props);

    setPage('/get-involved', 'Get Involved');
  }

  goTo(name) {
    this.props.history.push(name);
  }

  render() {
    return (
      <div className={styles.container}>
        <Section className={styles.cardContainer}>
          <div className={styles.cards}>
            { this.renderJoin() }
            { this.renderDonate() }
            { this.renderVolunteer() }
          </div>
        </Section>
      </div>
    );
  }

  renderJoin() {
    const description = (
      <span>
        Members are at the center of everything we do. Join us for regular
        climbing and special events.
      </span>
    );

    return (
      <Event
          name={"Join"}
          image={require('../../media/section_cover/join.png')}
          description={description}
          footer={
            <div className={styles.footer}>
              <Button variant={"red"} onClick={() => this.goTo('join')}>
                Join
              </Button>
              <a onClick={() => this.goTo('benefits')}>Member Benefits</a>
            </div>
          }
      />
    );
  }

  renderDonate() {
    const description = (
      <span>
        Every donation goes to furthering our mission to empower the LGBTQ
        community through rock climbing and outdoor recreation.
      </span>
    );

    return (
        <Event
          name={"Donate"}
          image={require('../../media/section_cover/donate.jpg')}
          description={description}
          footer={
            <div className={styles.footer}>
              <Button variant={"red"} onClick={() => this.goTo('donate')}>
                Donate
              </Button>
            </div>
          }
        />
    );
  }

  renderVolunteer() {
    const description = (
      <span>
        Volunteer at an event and share your passion for climbing with everyone
        in the LGBTQ community.
      </span>
    );

    return (
        <Event
          name={"Volunteer"}
          image={require('../../media/section_cover/volunteer.jpg')}
          description={description}
          footer={
            <div className={styles.footer}>
              <Button variant={"red"} onClick={() => this.goTo('volunteer')}>
                Volunteer
              </Button>
            </div>
          }
        />
    );
  }

};

export default Contribute;
