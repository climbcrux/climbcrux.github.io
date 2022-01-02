import React from 'react';
import classNames from 'classnames';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

import Event from './event.js';
import styles from './calendar.cssm';


const ISO8601 = 'YYYY-MM-DD';


export const Calendar = ({ events, month, onChange }) => {
  const goToPrev = () => {
    month.subtract(1, 'M');
    onChange({month: month});
  }

  const goToNext = () => {
    month.add(1, 'M');
    onChange({ month: month });
  }

  const getSundaysInMonth = (date) => {
    var sundays = [];
    var sunday = date.clone().startOf("month").day("Sunday");
    const month = date.month();

    while (month === sunday.month() || month === sunday.clone().endOf("week").month()) {
        sundays.push(sunday.clone());
        sunday.add(7, 'd');
    }
    return sundays;
  }

  var sundays = getSundaysInMonth(month);
  var weekList = sundays.map(date => (
    <Week key={`week_${date.format(ISO8601)}`}
          events={events}
          date={date.clone()}
          month={month} />
  ));

  return (
    <div className={styles.container}>
      <CalendarHeader month={month} goToPrev={goToPrev} goToNext={goToNext} />
      <DayNames />
			{ weekList }
    </div>
  );
}

Calendar.defaultProps = {
  variant: 'light',
  month: moment().startOf('month'),
};


///////////////////////////////////////
//Calendar Header Components
const HeaderButton = ({ dir, goTo }) => (
  <span className={styles.button} onClick={goTo}>
    { dir === 'left' && <BsFillCaretLeftFill /> }
    { dir === 'right' && <BsFillCaretRightFill />}
  </span>
)

const HeaderDate = ({ month }) => (
  <div className={styles.date}>
    <span className={styles.year}>{month.format('YYYY')}</span>
    <span className={styles.month}>{month.format('MMMM')}</span>
  </div>
)

const CalendarHeader = ({ month, goToPrev, goToNext }) => (
  <div className={styles.header}>
    <HeaderButton dir={'left'} goTo={goToPrev} />
    <HeaderDate month={month} />
    <HeaderButton dir={'right'} goTo={goToNext} />
  </div>
)

///////////////////////////////////////
// Calendar Week Components
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
    return (events || []).filter(e => (
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

	return <div className={styles.week} key={days[0].toString()}>{days}</div>;
}
