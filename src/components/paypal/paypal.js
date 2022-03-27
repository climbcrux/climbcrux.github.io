import React from 'react';
import classNames from 'classnames';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }

  &.invalid {
    opacity: 0.3;
  }
  &.invalid div, &.invalid a {
    pointer-events: none;
    text-decoration: none;
  }
  &.invalid:hover {
    cursor: not-allowed;
  }
`

const PaypalButton = ({price, onError, onSuccess, valid=false}) => {

  const environment = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';
  const client = {
    'sandbox': process.env.REACT_APP_PAYPAL_CLIENT_SANDBOX_TOKEN,
    'production': process.env.REACT_APP_PAYPAL_CLIENT_PRODUCTION_TOKEN
  };
  const currency = 'USD';

  const PaypalExpress = (
    <PaypalExpressBtn
      currency={currency}
      client={client}
      env={environment}
      total={Number(price) || 0.01}
      onSuccess={onSuccess}
      onError={onError}
    />
  )

  return (
    <ButtonWrapper className={!valid && 'invalid'}>
      {PaypalExpress}
    </ButtonWrapper>
  );
}

export default PaypalButton;
