import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import { Glyphicon } from 'react-bootstrap';
import styles from './calendar.cssm';

const ISO8601 = 'YYYY-MM-DD';
const moment = extendMoment(Moment);


class Calendar extends Component {

  static propTypes = {
		variant: PropTypes.string,
    events: PropTypes.array,
    month: PropTypes.object,
    nextMonth: PropTypes.func,
    prevMonth: PropTypes.func,
  };

  static defaultProps = {
		variant: 'light',
    month: moment().startOf('month'),
  };


  renderHeader() {
    const { month } = this.props;

    return (
      <div className={styles.header}>
        <span
          className={classNames(styles.button, styles.back)}
          onClick={this.props.prevMonth}>
          <Glyphicon glyph="menu-left" />
        </span>

        <div className={styles.date}>
          <span className={styles.year}>{month.format('YYYY')}</span>
          <span className={styles.month}>{month.format('MMMM')}</span>
        </div>

        <span
          className={classNames(styles.button, styles.forward)}
          onClick={this.props.nextMonth}>
          <Glyphicon glyph="menu-right" />
        </span>
      </div>
    );
  }

	renderWeeks() {
		const { month, events } = this.props;

    var date = month.clone().startOf("month").day("Sunday");
		var weeks = [];
		var done = false;

    var monthIndex = date.month();
    var count = 0;

    while (!done) {
      weeks.push(
				<Week key={`week_${date.format(ISO8601)}`}
              events={events}
              date={date.clone()}
              month={month} />
			);

      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
	}

  render() {
    const { variant } = this.props;

    return (
      <div className={classNames(styles.container, styles[variant])}>
        {this.renderHeader() }
        <DayNames />
				{ this.renderWeeks() }
      </div>
    );
  }

};

const DayNames = () => {
  return (
		<div className={classNames(styles.week, styles.names)}>
			<span className={styles.day}>Sun</span>
			<span className={styles.day}>Mon</span>
			<span className={styles.day}>Tue</span>
			<span className={styles.day}>Wed</span>
			<span className={styles.day}>Thu</span>
			<span className={styles.day}>Fri</span>
			<span className={styles.day}>Sat</span>
    </div>
  );
}

const Week = ({date, month, events}) => {
  function inMonth(date) {
    return month.month() === date.month();
  }

  function isToday(date) {
    return date.isSame(new Date(), 'day');
  }

  function advanceDay(date) {
    date = date.clone();
    date.add(1, 'd');
    return date;
  }

  function getDaysEvents(date) {
    return events.filter(e => (
      date >= moment(e.start).startOf('day') &&
      date <= moment(e.end).endOf('day')
    ));
  }

  function startsOnDate(e, date) {
    return moment(e.start).format(ISO8601) == date.format(ISO8601);
  }

  function endsOnDate(e, date) {
    return moment(e.end).format(ISO8601) === date.format(ISO8601);
  }

  function previousToToday(date) {
    return date.isBefore(new Date(), 'day');
  }

  function renderDate(date) {
    return (
      <div key={date.format(ISO8601)}
           name={date.format(ISO8601)}
           className={classNames(styles.day,
                                 isToday(date) && styles.today,
                                 !inMonth(date) && styles.notMonth)}>
        <span>{date.date()}</span>
        <div className={styles.events}>
          { getDaysEvents(date).map(e => (
            <Event
              key={e.title}
              firstDay={startsOnDate(e, date)}
              lastDay={endsOnDate(e, date)}
              past={previousToToday(date)}
              {...e}
            />)
          )}
        </div>
      </div>
    );
  }

	function getDays() {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push(renderDate(date));
      date = advanceDay(date);
    }
		return days;
	}

	var days = getDays();
	return (<div key={days[0].toString()} className={styles.week}>{days}</div>);
	
}

const Event = ({title,
                start,
                end,
                url,
                classification,
                firstDay=false,
                lastDay=false,
                past=false}) => {

  function isFullDay() {
    return !moment(start).isSame(moment(end), 'day');
  }

  return (
    <a onClick={() => {
      recordEvent('Events', 'Go To Eventbrite', {label: classification});
    }} href={url} target="_blank">
    <div className={classNames(styles.event,
                               styles[classification],
                               firstDay && styles.start,
                               lastDay && styles.end,
                               past && styles.past,
                               isFullDay() && styles.fullDay)}>
      { firstDay && title}
    </div>
    </a>
  );
};

export default Calendar;
