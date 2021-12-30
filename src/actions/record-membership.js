import React from 'react';
import es6PromisePolyfill from 'es6-promise';
import { encodeData } from './utils';

es6PromisePolyfill.polyfill();


export const WRITE_SUCCESS = 'MEMBERHSHIP_WRITE_SUCCESS';
const writeSuccess = (data) => {
  return {type: WRITE_SUCCESS};
};


export const WRITE_FAILURE = 'MEMBERSHIP_WRITE_FAILURE';
const writeFailure = () => {
  return {type: WRITE_FAILURE};
};


export const writeMembership = (data) => {
	return (dispatch) => {
    var url = `${process.env.REACT_APP_MEMBERSHIP_LIST_API}?${encodeData(data)}`;

    return fetch(url, {method: 'GET'}).then(response => {
      if (response.status > 400) {
        dispatch(writeFailure());
      } else {
        dispatch(writeSuccess());
      }
    }).catch(error => {
      dispatch(writeFailure());
    });
	}
}


export const NEWSLETTER_SUCCESS = 'NEWSLETTER_WRITE_SUCCESS';
const newsletterWriteSuccess = (data) => {
  return {type: NEWSLETTER_SUCCESS};
};


export const NEWSLETTER_FAILURE = 'NEWSLETTER_WRITE_FAILURE';
const newsletterWriteFailure = () => {
  return {type: NEWSLETTER_FAILURE};
};


export const newsletterSignup = (data) => {
	return (dispatch) => {
    var url = `${process.env.REACT_APP_NEWSLETTER_SUBSCRIBTION_API}?${encodeData(data)}`;

    return fetch(url, {method: 'GET'}).then(response => {
      if (response.status > 400) {
        dispatch(newsletterWriteFailure());
      } else {
        dispatch(newsletterWriteSuccess());
      }
    }).catch(error => {
      dispatch(newsletterWriteFailure());
    });
	}
};
