import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TopNav from '../top-nav/top-nav';
import { MEMBERSHIP_ON_SALE } from '../../constants';
import styles from './app-wrap.cssm';


const TABS = [{
  id: 'about', label: 'About Us',
}, {
  id: 'climb', label: 'Climbing',
}, {
  id: 'events', label: 'Events',
}, {
  id: 'join', label: 'Join', className: styles['joinTab'],
}];


class AppWrap extends Component {

  constructor(props) {
    super(props);
    this.switchRoute = this.switchRoute.bind(this);
  }

  switchRoute(newRoute) {
    if (newRoute === 'home') {
      this.props.history.push('');
    } else {
      this.props.history.push(newRoute);
    }
  };

  renderTopNav() {
    return (
      <TopNav tabs={TABS} onChange={this.switchRoute}/>
    );
  };

  renderSaleBanner() {
    return (<div />);
  }

  render() {
    return (
      <div className={styles.container}>
        { this.renderTopNav() }
        { MEMBERSHIP_ON_SALE && this.renderSaleBanner()}

        <div className={styles.scrollContainer}>
          {this.props.children}
        </div>

      </div>
    );
  }
};

export default withRouter(AppWrap);
