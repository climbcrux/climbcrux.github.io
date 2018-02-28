import 'isomorphic-fetch';
import es6PromisePolyfill from 'es6-promise';

import { EVENTBRITE_TOKEN, EVENTBRITE_ORG_ID } from '../CONFIG_FILES/credentials';

es6PromisePolyfill.polyfill();

const EVENTS_URL = `https:\/\/www.eventbriteapi.com/v3/organizers/${EVENTBRITE_ORG_ID}/events/?order_by=start_asc&status=live%2Cstarted%2Cended`;


export const LOAD_FAILURE = 'EVENT_LOAD_FAILURE';
const fetchFailure = () => {
  return {
    type: LOAD_FAILURE,
    payload: null,
  };
};


export const LOAD_SUCCESS = 'EVENT_LOAD_SUCCESS';
const fetchSuccess = (data) => {
  return {
    type: LOAD_SUCCESS,
    payload: data.events,
  };
}


export const getEvents = (startDate) => {
  return (dispatch) => {
    var url = `${EVENTS_URL}&token=${EVENTBRITE_TOKEN}&start_date.range_start=${startDate}`;

    return fetch(url).then(response => {
      if (response.status >= 400) {
        dispatch(fetchFailure());
      } else {
        return response.json();
      }
    }).then(data => {
      dispatch(fetchSuccess(data))
    }).catch(() => {
      dispatch(fetchFailure());
    });
  };
};
