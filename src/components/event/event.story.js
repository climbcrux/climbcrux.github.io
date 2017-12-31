import React from 'react';
import { storiesOf } from '@storybook/react';

import Event from './event';
var image = require('../../media/events.jpg');


storiesOf('Event', module)
.add('Full Size', () => (
  <div style={{margin: '20px', width: '450px'}}>
    <Event name='Newbie Night'
           time='7-10PM'
           description='Newbie Night'
           price='$37'
           image={image}
           gym={{name: 'The Cliffs @ LIC', link: 'https://goo.gl/maps/LiDbcPRDMhk'}}
           freq='monthly'
    />
  </div>
));
