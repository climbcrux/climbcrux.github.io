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
  '108_9': 'indoor',
  '109_9': 'outdoor',
};
