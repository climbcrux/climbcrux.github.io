import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Form, Field, field } from 'form-for';
import { bindBootstrapFieldComponents } from "form-for-bootstrap-components";
import SVG from 'react-inlinesvg';

import { writeMembership } from '../../actions/record-membership';
import PayPalButton from '../../components/paypal/paypal';
import { STATES } from './states';
import { WAIVER, REGISTER_SUCCESS, REGISTER_FAILURE } from './messages';
import styles from './membershipForm.cssm';

const queryString = require('query-string');
bindBootstrapFieldComponents();


class MembershipForm extends Component {
  static propTypes = {
    level: PropTypes.string,
    price: PropTypes.string,
    writeSuccess: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      member: new Member(),
      valid: false,
      showModal: false,
      modalType: 'small',
      modalContent: null,
    };

    this.submitForm = this.submitForm.bind(this);
    this.showAggrement = this.showAggrement.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.formError = this.formError.bind(this);
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
      member[key] = data[key] || '';
    });
    return member;
  }

  handleChange = mutator => {
    this.setState({member: mutator(),
                   valid: this.formIsValid()});
  }

  formIsValid() {
    return this.allRequiredFieldsPresent.bind(this)() && this.state.member.waived;
  }

  allRequiredFieldsPresent() {
    var required_fields = this.getRequiredFields.bind(this)();
    return required_fields.map(k => this.state.member[k]).every(k => k);
  }

  getRequiredFields() {
    var required = [];
    Object.keys(this.state.member.schema).forEach(key => {
      if (this.state.member.schema[key].required) {
        required.push(key);
      }
    });
    return required;
  }

  showAggrement() {
    this.setState({showModal: true, modalType: 'large', modalContent: WAIVER});
  }

  closeModal() {
    this.setState({showModal: false, modalContent: null, modalType: 'small'});
  }

  formError() {
    this.setState({showModel: true, modalContent: REGISTER_FAILURE, modalType: 'small'});
  }

  render() {
    return (
      <div className={styles.container}>
      <Form for={this.state.member}
            id="membership-form"
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

      <div className={classNames(styles.modal, !this.state.showModal && styles.closed)}>
        <div className={styles[this.state.modalType]}>
          <div className={styles.close} onClick={this.closeModal}>
            <SVG src={require('../../media/x-close.svg')} />
          </div>
          {this.state.modalContent}
        </div>
      </div>

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

    waived: {required: true, type: "checkbox"},
  };
}

export default connect(state => ({
  ...state.Membership,
}), {
  writeMembership,
})(MembershipForm);
