import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';

import Section from '../../components/section/section';
import Perk from '../../components/perk/perks';
import MemberLevel from '../../components/level/level';
import { MEMBERSHIP_ON_SALE } from '../../CONFIG_FILES/membership';
import { setPage, recordEvent } from '../../virtualPage';

import styles from './join.cssm';


export const CHANGE_LEVEL = 'CHANGE_MEMBER_LEVEL';


class Join extends Component {
  constructor(props) {
    super(props);

    this.goToMembership = this.goToMembership.bind(this);
    this.goToBenefits = this.goToBenefits.bind(this);
    this.state = {
      sale: MEMBERSHIP_ON_SALE
    };

    setPage('/join', 'Join');
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getPrice(price) {
    return Number(price.slice(1));
  }

  goToBenefits() {
    this.props.history.push('benefits');
  }

  goToMembership(level, price) {
    recordEvent(
      'Membership', 'Selected Level',
      {
        label: level,
        value: this.getPrice(price),
      });

    this.props.dispatch({
      type: CHANGE_LEVEL,
      payload: {
        level: level,
        price: price,
      }
    });
    this.props.history.push('membership');
  }

  renderToBenefitButton() {
    return (
      <div style={{textAlign: 'center', marginTop: '28px'}}>
        <a onClick={this.goToBenefits}>Check out our full list of benefits</a>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Section name="perks">
          <h1>Membership Perks</h1>
          <div className={styles.perks}>
            <Perk img={require('../../media/perks/rope_red.png')}
                  label="Learn the Ropes"
                  desc="Free and discounted classes at The Cliffs" />
            <Perk img={require('../../media/perks/harness_orange.png')}
                  label="Fuel your Passion"
                  desc="Discounted day passes and membership at partner gyms" />
            <Perk img={require('../../media/perks/helmet_green.png')}
                  label="Get outside"
                  desc="All levels, sport, and trad trips to The Gunks, Rumney, and more" />
            <Perk img={require('../../media/perks/anchor_purple.png')}
                  label="Better Together"
                  desc="Social events including members trip, holiday party,
                        and pride festivities" />
          </div>
        </Section>
        <Section name="level">
          <h1>Levels</h1>
          {this.state.sale && 
            <div className={styles.saleBadge}>
              <SVG src={require('../../media/sale.svg')} />
            </div>
          }
          <div className={styles.levels}>
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="standard" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="silver" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="gold" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="platinum" />
            <MemberLevel onClick={this.goToMembership}
                         sale={false} level="hardship" />
          </div>

          <div className={styles.disclaimers}>
            <div>* CRUX memberships are for the current calendar year and
            expire December 31st of the year payment is received. Exceptions
            apply. Membership registrations during our annual membership
            renewal drive in December expire December 31st of the following
            year.</div>

            <div>** Membership fees are tax deductable. The amount you can
            deduct excludes the monetary value of certain membership perks,
            including swag and holiday party tickets.</div>
          </div>
        </Section>
      </div>
    );
  }
}
export default withRouter(connect(null, null)(Join));
