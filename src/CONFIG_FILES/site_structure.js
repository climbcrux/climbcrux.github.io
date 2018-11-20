import React from 'react';
import styles from '../components/common/common.cssm';


export const TABS = [{
  id: 'about',
  path: {pathname: '/about'},
  label: 'About Us',
  sections: [{
    id: "whoarewe",
    path: {hash: '#who-we-are'},
    label: "Who We Are"
  }, {
    id: "leadership",
    path: {hash: '#leadership'},
    label: "Leadership"
  }, {
    id: "supporters",
    path: {hash: '#supporters'},
    label: "Supporters"
  }, {
    id: "partners",
    path: {hash: '#partners'},
    label: "Partners"
  }, {
    id: "contact",
    path: {hash: '#contact'},
    label: "Contact"
  }],
}, {
  id: 'climb',
  path: {pathname: '/climb'},
  label: 'Climbing',
  sections: [{
    id: "gettingstarted",
    path: {hash: '#getting-started'},
    label: 'Getting Started'
  }, {
    id: "regularevents",
    path: {hash: '#regular-events'},
    label: 'Regular Events'
  }, {
    id: "outdoor",
    path: {hash: '#outdoor'},
    label: 'Outdoor Program'
  }]
}, {
  id: 'events',
  path: {pathname: '/events'},
  label: 'Calendar',
}, {
  id: 'get-involved',
  path: {pathname: '/get-involved'},
  label: 'Get Involved',
  className: styles['joinTab'],
  sections: [{
    id: 'join',
    path: {pathname: '/join'},
    label: 'Become A Member'
  }, {
    id: 'donate',
    path: {pathname: '/donate'},
    label: 'Donate'
  }, {
    id: 'volunteer',
    path: {pathname: '/volunteer'},
    label: 'Volunteer'
  }]
}];


export const SOCIAL = [{
  id: 'facebook',
  label: 'Facebook',
  url: 'https://www.facebook.com/climbwithcrux/',
}, {
  id: 'instagram',
  label: 'Instagram',
  url: 'https://www.instagram.com/climbcrux/',
}];
