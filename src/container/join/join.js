import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Section from '../../components/section/section';
import Perk from '../../components/perk/perks';
import MemberLevel from '../../components/level/level';
import styles from './join.cssm';


export const CHANGE_LEVEL = 'CHANGE_MEMBER_LEVEL';


class Join extends Component {
  constructor(props) {
    super(props);

    this.goToMembership = this.goToMembership.bind(this);
    this.state = {sale: false};
  }

  goToMembership(level, price) {
    this.props.dispatch({
      type: CHANGE_LEVEL,
      payload: {
        level: level,
        price: price,
      }
    });

    this.props.history.push('membership');
  }

  render() {
    return (
      <div className={styles.container}>
        <Section name="perks">
          <h1>Membership Perks</h1>
          <div className={styles.perks}>
            <Perk img={require('../../media/perks/rope_red.png')}
                  label="Learn the Ropes"
                  desc="Free and sicounted classes at The Cliffs" />
            <Perk img={require('../../media/perks/harness_orange.png')}
                  label="Fuel the Addiction"
                  desc="Discounted day passes and membership at partner gyms" />
            <Perk img={require('../../media/perks/helmet_green.png')}
                  label="Get outside"
                  desc="All levels, sport, and trad trips to The Gunks, Rumney, and more" />
            <Perk img={require('../../media/perks/gear_blue.png')}
                  label="Gear Up"
                  desc="Members only discounts at EMS AND R&W Ropes" />
            <Perk img={require('../../media/perks/anchor_purple.png')}
                  label="Better Together"
                  desc="Social events including members trip, holiday party, and pride festivities" />
          </div>
        </Section>
        <Section name="level">
          <h1>Levels</h1>
          <div className={styles.levels}>
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="hardship" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="standard" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="silver" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="gold" />
            <MemberLevel onClick={this.goToMembership}
                         sale={this.state.sale} level="platinum" />
          </div>

          <div className={styles.disclaimers}>
            <div>* CRUX memberships are for the current calendar year and
            expire December 31st of the year payment is received. Exceptions
            apply. Membership registrations during our annual membership
            renewal sale in December expire December 31st of the following
            year.</div>

            <div>** Membership fees are tax deductable. The amount you can
            deduct excludes the monetary value of certain mebership perks,
            including swag and holiday party tickets.</div>
          </div>
        </Section>
      </div>
    );
  }
}
export default withRouter(connect(null, null)(Join));
