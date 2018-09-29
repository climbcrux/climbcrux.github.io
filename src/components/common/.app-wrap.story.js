import React from 'react';
import { storiesOf } from '@storybook/react';

import AppWrap from './app-wrap';


const fakeContent = (
  <div>
    <p>Lorum ipsum</p>
  </div>
);


storiesOf('AppWrap', module)
.add('Default', () => (
  <AppWrap>
    {fakeContent}
  </AppWrap>
));
