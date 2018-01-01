import React from 'react';
import es6PromisePolyfill from 'es6-promise';
import { encodeData } from './utils';
import { MEMBERSHIP_API } from '../credentials';


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
    var url = `${MEMBERSHIP_API}?${encodeData(data)}`;

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
};
