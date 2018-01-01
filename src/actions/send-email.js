import es6PromisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

es6PromisePolyfill.polyfill();

const SEND_EMAIL_API = "http://localhost:8000/email";


const fetchFailure = () => {
};


const fetchSuccess = (data) => {
};


export const sendEmail = (data) => {
  return (dispatch) => {
		var url = `${SEND_EMAIL_API}?${Object.keys(data).map(key =>
			`${key}=${data[key]}`).join('&')}`;

    return fetch(url).then(response => {
			if (response.status >= 400) {
				dispatch(fetchFailure());
			} else {
				return response.json();
			}
		}).catch(() => {
			dispatch(fetchFailure());
		});
	}
};
