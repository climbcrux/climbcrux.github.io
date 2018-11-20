import React, { Component } from 'react';
import { setPage } from '../../virtualPage';

import styles from './index.cssm';


class Donate extends Component {
  constructor(props) {
    super(props);
    setPage('/donate', 'Donate');
  }

  render() {
    return (
      <iframe className={styles.iframe}
              name="donationFrame"
              id="donationFrame"
              src="https://secure.givelively.org/donate/crux-climbing-inc" />
    );
  }
}
export default Donate;
