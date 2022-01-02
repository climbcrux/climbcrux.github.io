import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Form, Field } from 'form-for';
import { connectFields } from "form-for-bootstrap-components";

import { writeMembership,
         newsletterSignup } from '../../../actions/record-membership';
import PayPalButton from '../../../components/paypal/paypal';
import Modal from '../../../components/modal/modal';

import { WAIVER, REGISTER_SUCCESS, REGISTER_FAILURE } from './messages';
import { setPage, recordEvent } from '../../../virtualPage';

import { schema } from './member.js';
import styles from './membershipForm.cssm';

connectFields();

const requiredFields = Object.entries(schema).filter(
  ([field, schema]) => schema.required
).map(
  ([field, _]) => field
)

class MembershipForm extends Component {
  static propTypes = {
    level: PropTypes.string,
    price: PropTypes.string,
    writeSuccess: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      member: {},
      valid: false,
      showModal: false,
      modalType: 'small',
      modalContent: null,
      registered: false,
    };
    setPage('/membership', 'Membership');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.writeSuccess != this.props.writeSuccess) {
      if (nextProps.writeSuccess === true) {
        this.setState({
          showModal: true,
          modalType: 'small',
          modalContent: REGISTER_SUCCESS,
        });
      } else if (nextProps.writeSuccess === false ){
        this.setState({
          showModal: true,
          modalType: 'small',
          modalContent: REGISTER_FAILURE,
        });
      } else {
        this.setState({
          showModal: false,
          modalType: 'small',
          modalContent: null
        });
      }
    }
  }

  componentWillUnmount() {
    if (!this.state.registered) {
      recordEvent('Membership', 'Lost', {
        label: this.props.level,
        value: this.props.price,
      });
    }
  }

  getPrice(price) {
    return Number(price.slice(1));
  }

  submitForm = (payment) => {
    recordEvent('Membership', 'Paid', {
      label: this.props.level,
      value: this.getPrice(this.props.price),
    })

    this.props.writeMembership({
      ...this.fillNullValues(this.state.member),
      level: this.props.level,
      price: this.getPrice(this.props.price),
      paymentID: payment ? payment.paymentID: undefined,
    });

    // Write name & email to newsletter list
    var namePart = this.state.member.name.split(' ');
    this.props.newsletterSignup({
      first: namePart[0],
      last: namePart[namePart.length - 1],
      email: this.state.member.email,
    });

    this.setState({registered: true});
  }

  fillNullValues(data) {
    var member = new Object();
    Object.keys(data.schema).forEach(key => {
      member[key] = data[key] || '';
    });
    return member;
  }

  handleChange = (data) => {
    this.setState({ valid: this.formIsValid(data) });
  }

  formIsValid(data) {
    const allReqFields = requiredFields.map(field => data[field]).every(k => k);
    return allReqFields && data.waived;
  }

  showAggrement = () => {
    recordEvent('Membership', 'Opened Waiver');
    this.setState({showModal: true, modalType: 'large', modalContent: WAIVER});
  }

  closeModal = () => {
    this.setState({showModal: false, modalContent: null, modalType: 'small'});
  }

  formError = () => {
    recordEvent('Membership', 'Payment Failed');
    this.setState({showModel: true, modalContent: REGISTER_FAILURE, modalType: 'small'});
  }

  render() {
    return (
      <div className={styles.container}>
      <Form for={this.state.member} schema={schema} id="membership-form" onChange={this.handleChange}>
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

        <div className={styles.waiver}>
          <Field name="waived" />
          <div>
            By checking this box I, being of lawful age (18 or over), certify
            that I have read, understand, and accept all terms and conditions
            in the CRUX <a onClick={this.showAggrement}>Release of Liability,
            Indemnity Agreement and Assumption of Risk</a>.
          </div>
        </div>

        <div className={styles.button}>
          <PayPalButton price={Number(this.props.price.slice(1))}
                        valid={this.state.valid}
                        onSuccess={this.submitForm}
                        onError={this.formError} />
        </div>
      </Form>

      <Modal visible={this.state.showModal}
             onClose={this.closeModal}
             size={this.state.modalType}>
          {this.state.modalContent}
      </Modal>

      </div>
    );
  }
};

export default connect(state => ({
  ...state.Membership,
}), {
  writeMembership,
  newsletterSignup,
})(MembershipForm);
