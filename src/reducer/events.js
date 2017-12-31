import { LOAD_SUCCESS } from '../actions/get-events';
import { castEventbriteEvent } from '../utils/events';

const initState = {
  events: [],
};

export default function Events(state=initState, action) {
  switch(action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        events: processEvents(action.payload)
      }
    default:
      return state;
  }
};

function processEvents(events) {
  events = events.map(evnt => castEventbriteEvent(evnt));
  return events;
}

const EVENTS = [{
  title: 'Long Event',
  start: '2017-12-28T04:00:00Z',
  end: '2018-01-01T00:00:00Z',
}, {
  title: 'Short Event',
  start: '2017-12-07T06:00:00Z',
  end: '2017-12-07T10:00:00Z',
}];
