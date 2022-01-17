import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
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
    this.props.history.push({hash: name});
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
export default withRouter(SubNav);
