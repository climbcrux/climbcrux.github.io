import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SubNav from '../../components/sub-nav/sub-nav';
import Section from '../../components/section/section';
import ContactForm from '../../components/contact-form/contact-form';
import SupportersList from '../../components/supporters/supporters';
import { sendEmail } from '../../actions/send-email';

import styles from './about.cssm';


class About extends Component {
  static propTypes = {
    sendEmail: PropTypes.func,
  };

  renderWhoWeAre() {
    return (
      <Section name="who-we-are">
        <h1>Who We Are</h1>
        <p>
          <b>CRUX Climbing Inc is a 501(c)(3) nonprofit rock climbing organization</b>.
          We are dedicated to expanding access to the sport of rock climbing and outdoor
          recreation for LGBTQ communities in the New York metropolitan area and eastern
          New York.
        </p><p>
          Through climbing, CRUX aims to build community, support physical and emotional
          well-being, and offer leadership opportunities to LGBTQ individuals, while
          providing education and visibility within the greater climbing community.
        </p>
        <h4 className={styles.columnHeader}>Our programming features</h4>
        <div className={styles.columns}>
          <div className={styles.row}>
            <h5>Newbie Nights</h5>
            <p>Monthly Newbie Night: designed to introduce new folks to the
              sport or rock climbing</p>
          </div>
          <div className={styles.row}>
            <h5>Weekly Climbing</h5>
            <p>For experienced climbers to climb together in a supportive
              queered up environment</p>
          </div>
          <div className={styles.row}>
            <h5>Summer Outdoors</h5>
            <p>Summer full of outdoor climbing trips, including day trips for
               new climbers, multiday trips all over the East Coast for advanced
               climbers, and classes to advance your skills</p>
          </div>
          <div className={styles.row}>
            <h5>Outreach</h5>
            <p>Share your passion with others by volunteering during outreach events
               with the Ali Forney center</p>
          </div>
        </div>
      </Section>
    );
  }

  renderLeadership() {
    return (
      <Section name="leadership">
        <h1>Leadership</h1>
        <p>
          CRUX is lead, managed, and supported by a dedicated team of volunteers.<br/>
          Leadership is made up of the Board of Directors, Executive Director,
          and rock star coordinators.
        </p>
        <h4>Together they</h4>
        <ul>
            <li>Plan and staf CRUX events</li>
            <li>Develope and maintain relationships with local gyms and other LGBTQ
                organizations</li>
            <li>Assist gyms in creating inclusive spaces for all</li>
            <li>Provide resources for LGBTQ climbers at non-affiliated gyms</li>
            <li>and more...</li>
        </ul>
        <p>
          Are you a driven and committed member of the CRUX community looking to help
          shape the future of LGBTQ rock climbing in New York? We're always on the
          lookout for the newest CRUX leaders.<br/><br/>

          To about more about positions and how to apply go to our
          <Link to='/leadership' className={styles.link}>New Leader</Link>page.
        </p>
      </Section>
    );
  }

  renderSupporters() {
    return (
      <Section name="supporters">
        <h1>Supporters</h1>
        <p>
          CRUX is made possible by the gracious support of all our members.
          Some members go above and beyond, providing additional support
          through their Silver, Gold, or Platinum memberships.
          To you all, we are deeply grateful.
        </p>
        <p>Special thanks go out to:</p>
        <SupportersList />
      </Section>
    );
  }

  renderContact() {
    return (
      <Section name="contact">
        <h1>Contact Us</h1>
        <div className={styles.contactForm}>
          <div>
            <p>Got a question? Want to provide some feedback?<br/>
               We love hearing from you!</p>

            <p>Just fill out the form to the right.<br/>
               We make every effort to respond within 48 hours.</p>

            <div className={styles.infoField}>
              <h5>EMAIL ADDRESS</h5>
              <span>info@climbcrux.org</span>
            </div>

            <div>
              <h5>MAILING ADDRESS</h5>
              <span>
                 CRUX Climbing, Inc.<br/>
                 P.O. Box 372<br/>
                 New York, NY 10108
              </span>
            </div>
          </div>
          <ContactForm
            sendTo='kris@climbcrux.org'
            onSubmit={this.props.sendEmail}
            className={styles.form}
          />
        </div>
      </Section>
    );
  }

  render() {
    return (
      <div>
        <SubNav tabs={['who-we-are', 'leadership', 'supporters', 'contact']} />
        { this.renderWhoWeAre() }
        { this.renderLeadership() }
        { this.renderSupporters() }
        { this.renderContact()}
      </div>
    );
  }
};

export default connect((state) => ({
}), {
  sendEmail,
})(About);
