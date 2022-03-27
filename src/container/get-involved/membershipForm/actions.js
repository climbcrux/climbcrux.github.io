import React from 'react';
import es6PromisePolyfill from 'es6-promise';
import { encodeData } from '../../../actions/utils';
es6PromisePolyfill.polyfill();

export const SUBSCRIPTION = 'SubscribeNewsletter';
export const newsletterSignup = (data) => {
  if (process.env.NODE_ENV != "production") {
    console.log("DEV -- Newletter subscription called");
  }

	return (dispatch) => {
    var url = `${process.env.REACT_APP_NEWSLETTER_SUBSCRIBTION_API}?${encodeData(data)}`;

    return fetch(url, {method: 'GET'}).then(response => {
      if (response.status > 400) {
        dispatch({type: `${SUBSCRIPTION}::FAILED`});
      } else {
        dispatch({type: `${SUBSCRIPTION}::SUCCESS`});
      }
    }).catch(error => {
      dispatch({type: `${SUBSCRIPTION}::FAILED`});
    });
	}
};
