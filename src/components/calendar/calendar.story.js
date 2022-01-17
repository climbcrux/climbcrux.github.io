import React from 'react';
import { storiesOf } from '@storybook/react';

import { Calendar } from './calendar';


storiesOf('Calendar', module)
.add('No Events', () => (
  <Calendar />
));
