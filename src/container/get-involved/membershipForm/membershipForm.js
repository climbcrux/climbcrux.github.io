import React, { useReducer, useContext, useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Form from "@rjsf/core";

import PayPalButton from '../../../components/paypal/paypal';
import Modal from '../../../components/modal/modal';
import { encodeData } from '../../../actions/utils';
import { setPage, recordEvent } from '../../../virtualPage';

import { WAIVER, REGISTER_FAILURE } from './messages';
import { newsletterSignup } from './actions';
import { REGISTER_MEMBERSHIP, reducer } from './reducer';
import { MemberFormV2, MemberFormUISchema } from './member.js';
import styles from './form.cssm';

const Container = styled.div`
  margin: 0px 10rem;
  padding: 2.5rem 0px 10rem;
`
const Link = styled.a``

const ModalContext = React.createContext()
let membershipForm;


const MembershipForm = (props) => {
  if (process.env.NODE_ENV === "production") {
    setPage('/membership', 'Membership');
  }

  const toNumber = (price) => {
    return Number(price.slice(1));
  }
  const { price, level } = props.MemberInfo;
  let numeric_price = toNumber(price);
  const formInit = {
    membership_info: { level: level, price: numeric_price }
  }

  const [formValid, updateValidity] = useState(false);
  const [formData, updateForm] = useState(formInit);
  const [state, dispatch] = useReducer(reducer);

  const onChange = (data) => {
    updateForm(data.formData);
    updateValidity(data.errors.length === 0)
  }

  const registerMembership = (payment) => {
    if (process.env.NODE_ENV === "production") {
      recordEvent('Membership', 'Paid', { label: level, value: numeric_price })
      // var { name, email } = formData.personal_information;
      // var [firstName, lastName] = name.split(' ');
      // props.newsletterSignup({ first: firstName, last: lastName, email: email });
    }

    writeMembership({
      ...formData,
      paymentID: payment ? payment.paymentID: undefined
    }, dispatch)
  }

  // Form Customization
  const widgets = {
    WaiverWidget: WaiverWidget
  }
  return (
    <Container className={process.env.NODE_ENV === "production" ? styles.prodContainer : styles.devContainer}>
      <ModalContext.Provider value={{ state, dispatch }} >
        <Form
          id="membership-form"
          className={styles.membershipForm}
          schema={ MemberFormV2 }
          uiSchema={ MemberFormUISchema }
          formData={formData}
          liveValidate
          onChange={onChange}
          showErrorList={false}
          ObjectFieldTemplate={ObjectFieldTemplate}
          widgets={widgets}
          ref={(form) => { membershipForm = form }}

          // Only enable for debugging purposes
          onSubmit={registerMembership}
        />

        <PayPalButton
          price={numeric_price}
          valid={formValid}
          onSuccess={() => registerMembership}
          onError={() => dispatch({ type: 'PAYMENT::FAILED'})}
        />

        { state && state.Modal.open && state.Modal.type === "waiver" && <WaiverModal /> }
        { state && state.Modal.open && state.Modal.type === "payment::success" && <PaymentSuccess /> }
        { state && state.Modal.open && state.Modal.type === "payment::failed" && <PaymentFailed /> }

      </ModalContext.Provider>
    </Container>
  )
};

/***************************
 * Fields & Widgets
 */
const WaiverWidget = (props) => {

  const { _, dispatch } = useContext(ModalContext);
  const descriptionStyle = {
    height: "32px",
    lineHeight: "28px",
    paddingTop: "unset",
    paddingBottom: "unset",
    fontSize: "11px",
    borderTopLeftRadius: "unset",
    borderBottomLeftRadius: "unset",
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text" style={{ height: "100%" }}>
          <input type="checkbox" aria-label="Agree to waiver" className={styles.checkbox}
            onClick={() => props.onChange(!props.value)} />
        </div>
      </div>
      <div className="form-control" style={descriptionStyle}>
        By checking this box I, being of lawful age (18 or over), certify
        that I have read, understand, and accept all terms and conditions
        in the CRUX <Link onClick={() => dispatch({ type: "OpenWaiver" })}>
        Release of Liability, Indemnity Agreement and Assumption of Risk</Link>
      </div>
    </div>
  );
}

const ObjectFieldTemplate = ({ TitleField, properties, title, description, uiSchema }) => {
  const hidden = uiSchema["ui:widget"] === "hidden";
  const uiTitle = uiSchema["ui:title"];

  return (
    <div className={hidden ? styles.hidden : styles.visible }>
      { uiTitle && <TitleField className={styles.title} title={uiTitle} /> }
      <div className={styles[uiSchema["ui:classNames"]]}>
        {properties.map(prop => (
          <div key={prop.content.key}>{prop.content}</div>
        ))}
      </div>
      {description}
    </div>
  );
}


/***************************
 * Modals
 */
const WaiverModal = (props) => {

  recordEvent('Membership', 'Opened Waiver');
  const { _, dispatch } = useContext(ModalContext);
  return (
    <Modal visible={true} size={"large"} onClose={() => dispatch({ type: 'closeModal' })}>
      { WAIVER }
    </Modal>
  );
}

const PaymentSuccess = (props) => {
  const { _, dispatch } = useContext(ModalContext);
  return (
    <Modal visible={true} size={"small"} onClose={() => dispatch({ type: "closeModal" })}>
      <div>
        <h3>Welcome!</h3>
        <p>
          Your membership has been successfully processed. You’ll receive an email
          shortly explaining what will happen next.
        </p>
        <p>
          We’ll see you on the wall soon!
        </p>
      </div>
    </Modal>
  )
}

const PaymentFailed = (props) => {

  recordEvent('Membership', 'Payment Failed');
  const { _, dispatch } = useContext(ModalContext);
  return (
    <Modal visible={true} size={"small"} onClose={() => dispatch({ type: "closeModal" })}>
      <div>
      	<h3>Oh No!</h3>
      	<p>
          Looks like something when wrong processing your membership. Try giving us a
          few minutes. If you see this message again please contact, <a
          href="mailto:site@climbcrux.org">site@climbcrux.org</a>.
      	</p>
      </div>
    </Modal>
  )
}

/***************************
 * Actions
 */
const MEMBERSHIP_API = process.env.NODE_ENV === "production" ? process.env.REACT_APP_MEMBERSHIP_PROD_API : process.env.REACT_APP_MEMBERSHIP_DEV_API;
const writeMembership = (data, dispatch) => {

	const flattenData = (data, dispatch) => {
		var formValues = {};
		Object.keys(data).forEach((key) => {
			formValues = { ...data[key], ...formValues };
		})
		return formValues;
	}

  var url = `${MEMBERSHIP_API}?${encodeData(flattenData(data))}`;
  return fetch(url, {method: 'GET'}).then(response => {
    if (response.status > 400) {
      dispatch({type: `${REGISTER_MEMBERSHIP}::FAILED`});
    } else {
      dispatch({type: `${REGISTER_MEMBERSHIP}::SUCCESS`});
    }
  }).catch(error => {
    dispatch({type: `${REGISTER_MEMBERSHIP}::FAILED`});
  });
}


export default connect(state => ({
  ...state.Membership
}), {
  newsletterSignup,
})(MembershipForm);
