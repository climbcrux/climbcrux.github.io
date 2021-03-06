import React from 'react';
import Event from '../../components/event/event';
import styles from './climbing.cssm';

const DESCRIPTIONS = {
  newbieNight:
    <div>
      <p>The Frist Friday of every month is CRUX Newbie Night. Designed for new
      or less-experienced climbers, CRUX hosts teach climbers about climbing
      equipment, safety, and technique for both top-roping and bouldering.</p>
      <p>Look for the CRUX banner near the couches right of the front desk.</p>

      <p style={{fontSize: '10px'}}>
        *Price includes day pass and rentals for first time climbers. Pay
        at the front desk
      </p>
    </div>,
  monday:
    <div>
      <p>
      Weekly climbs are for climbers with some experience. Climbers
      intending to top rope or lead must be belay certified. Bouldering areas
      are open for climbers of all experience levels who know bouldering safety
      and etiquette.
      </p>
      <p>Look for the CRUX banner near the couches right of the front desk.</p>

      <p style={{fontSize: '10px'}}>
        *Price only includes day pass. Pay at the front desk. Free for Cliff
        members.
      </p>
    </div>
};

export const EVENTS = [
  <Event name='Newbie Night'
         time='7 - 10PM'
         price='$25'
         gym={{name: 'The Cliffs @ LIC', link: 'https://goo.gl/maps/LiDbcPRDMhk'}}
         freq='monthly'
         description={DESCRIPTIONS.newbieNight}
         image={require('../../media/events/cliffs_mon.jpg')}
         key='newbie_night'
  />,
  <Event name='Monday Night Heights'
         time='7 - 10PM'
         price='$25'
         gym={{name: 'The Cliffs @ LIC', link: 'https://goo.gl/maps/LiDbcPRDMhk'}}
         freq='weekly'
         description={DESCRIPTIONS.monday}
         image={require('../../media/events/cliffs_nn.jpg')}
         key='monkey'
         className={styles.centerImage}
  />
         
];
