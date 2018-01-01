import React from 'react';
import es6PromisePolyfill from 'es6-promise';


es6PromisePolyfill.polyfill();


const GAPI_URL = 'https://script.google.com/a/climbcrux.org/macros/s/AKfycbzhTwPAhCcXeTz00yqUQsQPYU4_DEd8nXtRwA-B7PJQIZSTYOpn/exec';


export const WRITE_SUCCESS = 'GAPI_WRITE_SUCCESS';
const writeSuccess = (data) => {
  return {
    type: WRITE_SUCCESS,
    payload: null,
  };
};


export const writeMembership = (data) => {
	return (dispatch) => {
    var url = `${GAPI_URL}?${encodeData(data)}`;
    console.log(url);

    return fetch(url, {method: 'GET'}).then(response => {
      if (response.status > 400) {
        console.log('That didnt work');
      } else {
        dispatch(writeSuccess);
      }
    }).catch(error => {
      console.log(error);
    });
	}
};

function encodeData(data) {
  return Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
}
