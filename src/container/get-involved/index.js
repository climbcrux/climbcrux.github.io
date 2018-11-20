import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Section from '../../components/section/section';
import section from '../../components/section/section.cssm';

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
          image={require('../../media/join.png')}
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
          image={require('../../media/donate.jpg')}
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
          image={require('../../media/volunteer.jpg')}
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

  renderMore() {
    return (
      <Section name="more-giving">
        <h1>More Ways to Give</h1>
        <p>
          There are many ways you can donate to CRUX beyond one-time donations
          and membership. All donations help bring climbing to more people

        </p>
        <div className={section.columns}>
          <div className={section.row}>
            <h5>Workplace Giving</h5>
            <p>Get your employer involved through workplace giving.</p>
          </div>
          <div className={section.row}>
            <h5>Fundraise on Facebook</h5>
            <p></p>
          </div>
          <div className={section.row}>
            <h5>Become a Partner</h5>
            <p></p>
          </div>
        </div>
      </Section>
    );
  }

  renderFinancials() {
    return (
      <Section name="financials">
        <h1>Financials</h1>
      </Section>
    );
  }

};

export default Contribute;
