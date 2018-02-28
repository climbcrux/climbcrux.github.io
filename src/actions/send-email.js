import 'isomorphic-fetch';
import es6PromisePolyfill from 'es6-promise';
import { encodeData } from './utils';
import { EMAIL_API } from '../CONFIG_FILES/credentials';

es6PromisePolyfill.polyfill();


export const WRITE_FAILURE = 'EMAIL_WRITE_FAILURE';
const fetchFailure = () => {
  return {
    type: WRITE_FAILURE,
  };
};


export const WRITE_SUCCESS = 'EMAIL_WRITE_SUCCESS';
const fetchSuccess = (data) => {
  return {
    type: WRITE_SUCCESS,
  };
};


export const sendEmail = (data) => {
  return (dispatch) => {
		var url = `${EMAIL_API}?${encodeData(data)}`;

    return fetch(url, {method: 'GET'}).then(response => {
			if (response.status >= 400) {
				return dispatch(fetchFailure());
			} else {
				return dispatch(fetchSuccess());
			}
		}).catch(error => {
			return dispatch(fetchFailure());
		});
	}
};
