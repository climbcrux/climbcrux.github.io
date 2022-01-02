import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { setPage } from '../../virtualPage';

import { getEvents } from '../../actions/get-events';
import { Calendar } from '../../components/calendar/calendar';
import styles from './event.cssm';


class Events extends Component {
  constructor(props) {
    setPage('/events', 'Event Calendar');
    super(props);

    this.state = {
      currentMonth: moment().startOf('month'),
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var {start, end} = this.getCalendarRange(this.state.currentMonth);
    this.props.getEvents(start, end);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentMonth != prevState.currentMonth) {
      var {start, end} = this.getCalendarRange(this.state.currentMonth);
      this.props.getEvents(start, end);
    }
  }

  getCalendarRange(date) {
    var start = date.clone();
    start = start.subtract(2, 'M').format('YYYY-MM-DDThh:mm:ss');

    var end = date.clone();
    end = end.add(2, 'M').format('YYYY-MM-DDThh:mm:ss');

    return { start: start, end: end};
  }

  changeMonth = (data) => {
    this.setState({currentMonth: data.month});
  }

  render() {
    const { events } = this.props;

    return (
  		<div className={styles.container}>
  			<Calendar
          events={events}
          month={this.state.currentMonth.clone()}
          onChange={this.changeMonth}
        />
  		</div>
    );
 }
};

Events.propTypes = {
  events: PropTypes.array,
  getEvents: PropTypes.func.isRequired,
};

export default connect(state => ({
  events: state.Events.events,
}), {
  getEvents,
})(Events);
