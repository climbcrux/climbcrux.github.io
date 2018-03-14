import { LOAD_SUCCESS } from '../actions/get-events';


const initState = {events: []};


export default function Events(state=initState, action) {
  switch(action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        events: action.payload.map(evnt => castEventbriteEvent(evnt))
      }
    default:
      return state;
  }
};


/****
 * Take an event from the Eventbrite API
 * and cast it into a big-calendar event
 */
export function castEventbriteEvent(evnt) {
  return {
    title: evnt.name.text,
    desc: evnt.description.text,
    start: new Date(evnt.start.local),
    end: new Date(evnt.end.local),
    url: evnt.url,
    classification: EVENT_TYPE_MAP[`${evnt.category_id}_${evnt.format_id}`],
  }
};

const EVENT_TYPE_MAP = {
  '108_9': 'indoor', // Topic: Sport & Fitness, Format: Class
  '109_9': 'outdoor', // Topic: Travel & Outdoors, Format: Class
  '108_10': 'special', // Topic: Sport & Fitness, Format: Meeting
};
