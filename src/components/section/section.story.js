import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './section';


storiesOf('Section', module)
.add('Minimal Text', () => (
  <Section>
    Lorem ipsum dolor sit amet
  </Section>
))
.add('With Header', () => (
  <Section>
    <h1>My Section</h1>
    <p>Lorem ipsum dolor sit amet</p>
  </Section>
));
