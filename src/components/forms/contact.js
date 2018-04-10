import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

import Button from '../button/button';
import styles from './form.cssm';


class ContactForm extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      message: '',
      department: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target) {
      this.setState({[event.target.name]: event.target.value});
    }
  }

  handleSubmit() {
    this.props.onSubmit({
      name: `${this.state.first} ${this.state.last}`,
      department: this.state.department,
      from: this.state.email,
      subject: `CRUX Website Contact - ${this.state.first} ${this.state.last}`,
      message: this.state.message
    });
  }

  render() {
    return (
      <div className={classNames(styles.container, this.props.className)}
           style={this.props.style}>
        <form>
          <div>
            <div className={styles.header}>Name<span>*</span></div>
            <div className={styles.inputRow}>
              <div>
                <input type="text" name="first"
                       value={this.state.first}
                       onChange={this.handleChange}/>
                <span>First</span>
              </div>
              <div>
                <input name="last" type="text"
                       value={this.state.last}
                       onChange={this.handleChange}
                />
                <span>Last</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.header}>Email<span>*</span></div>
            <div className={styles.inputRow}>
              <input type="email" name="email"
                     value={this.state.email}
                     onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div className={styles.header}>Contact Regarding<span>*</span></div>
            <div className={styles.inputRow}>
              <select name="department" onChange={this.handleChange}>
                <option value="web">Website Issues</option>
                <option value="indoor">Indoor Programming</option>
                <option value="outdoor">Outdoor Programming</option>
                <option value="outreach">Outreach</option>
                <option value="membership">Membership Info</option>
                <option value="treasurer">Donations/Payment</option>
                <option value="board">Board/Executive Director</option>
              </select>
            </div>
          </div>
          <div>
            <div className={styles.header}>Message<span>*</span></div>
            <div className={styles.inputRow}>
              <textarea name="message" value={this.state.message}
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
};

export default ContactForm;
