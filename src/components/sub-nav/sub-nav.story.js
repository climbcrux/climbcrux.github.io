import React from 'react';
import { Element } from 'react-scroll';
import { storiesOf } from '@storybook/react';

import SubNav from './sub-nav';


const TABS = ['foo', 'bar'];

const styles = {
  width: '100%',
  height: '100%',
  color: 'white',
  'font-weight': 'bold',
};

storiesOf('Sub-Nav', module)
.add('Default', () => (
  <div style={{height: '100vh', width: '100vw'}}>
    <SubNav tabs={TABS} />
    <Element name="foo" style={{...styles, background: 'blue'}}>
      Foo Element
    </Element>
    <Element name="bar" style={{...styles, background: 'red'}}>
      Bar Element
    </Element>
  </div>
));
