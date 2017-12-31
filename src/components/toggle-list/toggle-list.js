import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Collapse} from 'react-collapse';

import styles from './toggle-list.cssm';


class ToggleList extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = { active: undefined };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(active) {
    if (active === this.state.active) {
      this.setState({active: undefined});
    } else {
      this.setState({active});
    }
  }

  renderQA({question, answer, key}) {
    const { active } = this.state;

    return (
      <div className={styles.container} key={key}>
        <div className={styles.header}
             onClick={() => this.toggleActive(question)}>{question}</div>
        <Collapse
          forceInitialAnimation={true}
          isOpened={active === question}
          className={styles.body}>
          {answer}
        </Collapse>
     </div>
    );
  }

  render() {
    return (<div>
      {this.props.items.map((item, i) => this.renderQA({...item, key: i}))}
    </div>);
  }
};
export default ToggleList;
