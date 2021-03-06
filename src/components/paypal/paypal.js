import React from 'react';
import classNames from 'classnames';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Button from '../button/button';

import {
  PAYPAL_ENVIRONMENT,
  PAYPAL
} from '../../CONFIG_FILES/credentials';
import styles from './paypal.cssm';


const PayPalButton = ({price,
                       onError,
                       onSuccess,
                       valid=false}) => {

  const environment = PAYPAL_ENVIRONMENT;
  const currency = 'USD';
  const client = {...PAYPAL};

  function nullClick() {
  }

  return (
    <div className={classNames(styles.container, !valid && styles.invalid)}>
      <PaypalExpressBtn
        currency={currency}
        client={client}
        env={environment}
        total={Number(price) || 0.01}
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
}
export default PayPalButton;
