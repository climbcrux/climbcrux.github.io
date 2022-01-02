import React from 'react';
import classNames from 'classnames';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

import { recordOutbound } from '../../virtualPage.js';
import styles from './calendar.cssm';


export default Event = ({title, start, end, url, classification, firstDay=false, lastDay=false, past=false}) => {

  function isFullDay () {
    return !moment(start).isSame(moment(end), 'day');
  }

  function trackOutboundClick() {
    recordOutbound('Outbound', 'Eventbrite', {label: classification})
  }

  return (
    <a onClick={trackOutboundClick} href={url} target="_blank">
      <div className={classNames(styles.event,
                                 styles[classification],
                                 firstDay && styles.start,
                                 lastDay && styles.end,
                                 past && styles.past,
                                 isFullDay() && styles.fullDay)}>
        { firstDay && title}
      </div>
    </a>
  )
}
