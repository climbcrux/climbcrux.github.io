import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import Button from '../button/button';
import styles from './contact-form.cssm';


class ContactForm extends Component {
  static propTypes = {
    sendTo: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      first: undefined,
      last: undefined,
      email: undefined,
      message: undefined,
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
      to_email: this.props.sendTo,
      from_email: this.state.email,
      subject: `Contact Form - ${this.state.first} ${this.state.last}`,
      message: this.state.message
    });
  }

  render() {
    return (
      <div className={classNames(styles.container, this.props.className)}
           style={this.props.style}>
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
          <div className={styles.header}>Message<span>*</span></div>
          <div className={styles.inputRow}>
            <textarea name="message" value={this.state.message}
                      onChange={this.handleChange} />
          </div>
        </div>
        <div>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
};

export default ContactForm;
