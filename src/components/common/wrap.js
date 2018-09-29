import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Message } from '../../CONFIG_FILES/in_prod_messages';
import { TABS, SOCIAL } from '../../CONFIG_FILES/site_structure';

import IPM from './ipm';
import TopNav from './top-nav';
import Footer from './footer';
import ScrollControl from './scroll';

import styles from './common.cssm';


class AppWrap extends Component {

  constructor(props) {
    super(props);
    this.switchRoute = this.switchRoute.bind(this);
  }

  switchRoute(newRoute) {
    if (newRoute.pathname === 'home') {
      this.props.history.push('');
    } else {
      this.props.history.push(newRoute);
    }
  };

  render() {
    return (
      <div className={classNames(styles.container, !!Message && styles.hasIPM)}>
        <TopNav tabs={TABS} onChange={this.switchRoute} />

        {!!Message && <IPM message={Message} />}

        <div className={styles.scrollContainer}>
          <ScrollControl />
          {this.props.children}
        </div>

        <Footer tabs={TABS}
                social={SOCIAL}
                onChange={this.switchRoute} />
      </div>
    );
  }
};

export default withRouter(AppWrap);
