import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactForm from '../../components/forms/contact';
import Modal from '../../components/modal/modal';
import PhotoGrid from '../../components/photo-grid/photo-grid';
import SubNav from '../../components/sub-nav/sub-nav';

import section from '../../components/section/section.cssm';
import Section from '../../components/section/section';

import { sendEmail } from '../../actions/email';
import { setPage, recordEvent } from '../../virtualPage';

// Constants
import { LEADERSHIP } from '../../CONFIG_FILES/leaders';
import { PARTNERS } from '../../CONFIG_FILES/supporters';

// Style Sheets
import { SEND_EMAIL_SUCCESS, SEND_EMAIL_FAILURE } from './messages';
import SupportersList from './supporters';

import styles from './about.cssm';


class About extends Component {
  static propTypes = {
    sendEmail: PropTypes.func,
    writeSuccess: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {showModal: false, modalContent: null};

    setPage('/about', 'About Us');

    this.closeModal = this.closeModal.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.writeSuccess !== this.props.writeSuccess) {
      if (nextProps.writeSuccess === true) {
        this.setState({showModal: true, modalContent: SEND_EMAIL_SUCCESS});
      } else if (nextProps.writeSuccess === false) {
        this.setState({showModal: true, modalContent: SEND_EMAIL_FAILURE});
      } else {
        this.setState({showModal: false});
      }
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <SubNav tabs={[
          'who-we-are',
          'leadership',
          'supporters',
          'partners',
          'contact'
        ]} />

        { this.renderWhoWeAre() }
        { this.renderLeadership() }
        { this.renderSupporters() }
        { this.renderPartners() }
        { this.renderContact()}
        
        <Modal visible={this.state.showModal}
               onClose={this.closeModal}
               size={'small'}>
          {this.state.modalContent}
        </Modal>
      </div>
    );
  }

  renderWhoWeAre() {
    return (
      <Section name="who-we-are">
        <h1>Who We Are</h1>
        <p>
          <b>CRUX Climbing Inc is a 501(c)(3) nonprofit rock climbing
          organization</b>. We are dedicated to expanding access to the sport
          of rock climbing and outdoor recreation for LGBTQ communities in the
          New York metropolitan area and eastern New York.
        </p><p>
          Through climbing, CRUX aims to build community, support physical and
          emotional well-being, and offer leadership opportunities to LGBTQ
          individuals, while providing education and visibility within the
          greater climbing community.
        </p>
        <h4 className={styles.header}>Our programming features</h4>
        <div className={section.columns}>
          <div className={section.row}>
            <h5>Newbie Nights</h5>
            <p>Monthly Newbie Night: designed to introduce new folks to the
              sport or rock climbing</p>
          </div>
          <div className={section.row}>
            <h5>Weekly Climbing</h5>
            <p>For experienced climbers to climb together in a supportive
              queered up environment</p>
          </div>
          <div className={section.row}>
            <h5>Summer Outdoors</h5>
            <p>Summer full of outdoor climbing trips, including day trips for
            new climbers, multiday trips all over the East Coast for advanced
            climbers, and classes to advance your skills</p>
          </div>
          <div className={section.row}>
            <h5>Outreach</h5>
            <p>Share your passion with others by volunteering during outreach
            events with the Ali Forney center</p>
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
          CRUX is led, managed, and supported by a dedicated team of
          volunteers.<br/> Leadership is made up of the Board of Directors,
          Executive Director, and rock star coordinators.
        </p>
        <h4>Together they</h4>
        <ul>
            <li>Plan and staff CRUX events</li>
            <li>Develop and maintain relationships with local gyms and LGBTQ
                organizations</li>
            <li>Assist gyms in creating inclusive spaces for all</li>
            <li>Provide resources for LGBTQ climbers at non-affiliated gyms</li>
            <li>and more...</li>
        </ul>
        <PhotoGrid photos={LEADERSHIP}/>
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

  renderPartners() {
    return (
      <Section name="partners">
        <h1>Partners</h1>
        <div className={styles.grid}>
          {PARTNERS.map(this._partnerRender)}
        </div>
      </Section>
    );
  }

  _partnerRender(p) {
    return (
      <a key={p.href} href={p.href} target="_blank" style={p.style}>
        <img src={p.src} />
      </a>
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
               We make every effort to respond within 72 hours.</p>

            <div className={styles.infoField}>
              <h5>EMAIL ADDRESS</h5>
              <span>info@climbcrux.org</span>
            </div>

            <div>
              <h5>MAILING ADDRESS</h5>
              <span>
                 CRUX Climbing, Inc.<br/>
                 228 Flatbush Ave Apt 3F<br/>
                 Brooklyn, NY 11217
              </span>
            </div>
          </div>
          <ContactForm
            onSubmit={this.sendEmail}
            className={styles.form}
          />
        </div>
      </Section>
    );
  }

  sendEmail(data) {
    recordEvent('Contact', 'Email', {label: data.department});
    this.props.sendEmail(data);
  }

  closeModal() {
    this.setState({showModal: false});
  }
};

export default connect((state) => ({
  ...state.Email
}), {
  sendEmail,
})(About);
