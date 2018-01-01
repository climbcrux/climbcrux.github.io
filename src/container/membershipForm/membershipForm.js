import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field, field } from 'form-for';
import { bindBootstrapFieldComponents } from "form-for-bootstrap-components";

import { writeMembership } from '../../actions/record-membership';
import PayPalButton from '../../components/paypal/paypal';
import { STATES } from './states';
import styles from './membershipForm.cssm';

const queryString = require('query-string');
bindBootstrapFieldComponents();


class MembershipForm extends Component {
  static propTypes = {
    level: PropTypes.string,
    price: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      member: new Member(),
      valid: false,
    };

    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  formIsValid() {
    var invalidFields = document.querySelectorAll('.invalid-feedback');
    return invalidFields.length === 0;
  }

  submitForm(payment) {
    this.props.writeMembership({
      ...this.fillNullValues(this.state.member),
      level: this.props.level,
      price: this.props.price,
      paymentID: payment ? payment.paymentID: undefined,
    });
  }

  fillNullValues(data) {
    var member = new Object();
    Object.keys(data.schema).forEach(key => {
      member[key] = data[key];
    });
    return member;
  }

  handleChange = mutator => {
    this.setState({member: mutator(),
                   valid: this.formIsValid()});
  }

  render() {
    return (
      <div className={styles.container}>
      <Form for={this.state.member}
            onChange={this.handleChange}>

        <div className={styles.section}>
          <div className={styles.header}>Personal Info</div>

          <div className={styles.fieldGroup}>
            <Field name="name" />
            <Field name="pronoun" />
          </div>
          <div className={styles.fieldGroup}>
            <Field name="email" />
            <Field name="phone" />
          </div>

          <div className={styles.fieldGroup}>
            <Field name="address" />
            <Field name="city" />
          </div>
          <div className={styles.fieldGroup}>
            <Field name="state" />
            <Field name="zip" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>Emergency Contact</div>
          <div className={styles.fieldGroup}>
            <Field name="contact_name" />
            <Field name="contact_phone" />
          </div>
          <Field name="contact_relation" />
        </div>

        <div className={styles.button}>
          <PayPalButton price={Number(this.props.price.slice(1))}
                        valid={this.state.valid}
                        onSuccess={this.submitForm} />
        </div>
      </Form>
      </div>
    );
  }
};

class Member {
  schema = {
    name: {required: true},
    pronoun: {},
    email: {type: "email", required: true},
    phone: {type: "tel"},
    address: {required: true},
    city: {required: true},
    state: {type: "select", options: STATES, required: true},
    zip: {required: true},

    contact_name: {required: true},
    contact_phone: {required: true},
    contact_relation: {required: true},
  };
}

export default connect(state => ({
  ...state.Membership,
}), {
  writeMembership,
})(MembershipForm);
