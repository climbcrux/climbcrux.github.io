import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './parallax.cssm';


export class Parallax extends Component {

  static propTypes = {
    className: PropTypes.string,
    pages: PropTypes.number,
  };

  render() {
    return (
      <div className={classNames(styles.container, this.props.className)}>
        {this.props.children}
      </div>
    );
  }

  static Layer = class extends Component {
    render() {
      return (
        <div className={classNames(styles.layer, this.props.className)}>
          <div className={styles.layerContent}>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}
