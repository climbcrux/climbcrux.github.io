import React from 'react';
import { storiesOf, action } from '@storybook/react';

import TopNav from './top-nav';
import styles from '../app-wrap/app-wrap.cssm';


const TABS = [{
  id: 'about', label: 'About Us',
}, {
  id: 'climb', label: 'Climbing', 
}, {
  id: 'events', label: 'Events',
}, {
  id: 'join', label: 'Join', className: styles['joinTab'],
}];


function changeTab(tid) {
  action('TopNav tabChange')(tid);
};


storiesOf('Top Nav Menu', module)
.add('Default Nav', () => (
  <TopNav tabs={TABS} onChange={changeTab}/>
));
