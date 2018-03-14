import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Events, scrollSpy, scroller } from 'react-scroll';

import Button from '../button/button';
import styles from './sub-nav.cssm';


class SubNav extends Component {
  static propTypes = {
    tabs: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    scrollSpy.update()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollTo(name) {
    const scrollOptions = {offset: 0, smooth: true};
    var tab_idx = this.props.tabs.indexOf(name) + 1;
    scroller.scrollTo(name, {...scrollOptions, duration: tab_idx * 200});
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className={styles.container}>
        { tabs.map(tab => 
          <Button key={tab} onClick={this.scrollTo} name={tab}>
            {tab.split('-').join(' ')}
          </Button>
        )}
      </div>
    );
  }
};
export default SubNav;
