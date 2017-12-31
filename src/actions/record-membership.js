import React from 'react';
import es6PromisePolyfill from 'es6-promise';


es6PromisePolyfill.polyfill();


const GAPI_URL = 'https://script.google.com/macros/u/2/s/AKfycbwCm9PANiPyd6x5GSytcMPSb9JtaLzbbqTQDmHMYj4kvC_KdwM/exec?callback=?';


export const WRITE_SUCCESS = 'GAPI_WRITE_SUCCESS';
const writeSuccess = (data) => {
  debugger;

  return {
    type: WRITE_SUCCESS,
    payload: null,
  };
};


export const writeMembership = (data) => {
	return (dispatch) => {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', GAPI_URL);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		// Url encode form data for sending as post data
		var encoded = Object.keys(data).map(k => {
				return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
		}).join('&');
		xhr.send(encoded);
	}
};
