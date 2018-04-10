import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';
import { checkSubscriptionStatus } from '../../actions/email';
import styles from './form.cssm';


class MailChimpForm extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    isSubscribed: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    this.props.isSubscribed(this.state.email);
    this.props.onSubmit({
      ...this.state
    });
  }

  handleChange(event) {
    if (event.target) {
      this.setState({[event.target.name]: event.target.value});
    }
  }
  
  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        <form>
          <div>
            <div className={styles.header}>Name<span>*</span></div>
            <div className={styles.inputRow}>
              <div> 
                <input type="text" name="first" value={this.state.first}
                  onChange={this.handleChange} />
                <span>First</span>
              </div><div>
                <input type="text" name="last" value={this.state.last}
                  onChange={this.handleChange} />
                <span>Last</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.header}>Email<span>*</span></div>
            <div className={styles.inputRow}>
              <input type="email" name="email" value={this.state.email}
                onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}
export default MailChimpForm;
