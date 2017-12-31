import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './top-nav.cssm';

class TopNav extends Component {

  static propTypes = {
    tabs: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    tabs: [],
  };

  onClick = (tid) => {
    if (this.props.onChange) {
      this.props.onChange(tid);
    }
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.logoContainer}
             onClick={() => this.onClick('home')} />
        <div className={styles.subNavContainer}>
          {tabs.map(tab => (
            <div key={tab.id} className={tab.className}
                 onClick={() => this.onClick(tab.id)}
            >{tab.label}</div>
          ))}
        </div>
      </div>
    );
  }
};

export default TopNav;
