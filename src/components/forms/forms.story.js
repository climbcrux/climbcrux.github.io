import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ContactForm from './contact';
import MailChimpForm from './mailchimp';


const submitEmail = (email) => {
  action('Form Submitted')(email);
};

const submitMailchimp = (data) => {
  action('Form Submitted')(data);
};


storiesOf('Forms', module)
.add('Contact Form - Full Screen', () => (
  <ContactForm
    sendTo='test@email.com'
    onSubmit={submitEmail}
    style={{margin: '20px'}}
  />
))
.add('Contact Form - Small Size', () => (
  <ContactForm
    sendTo='test@email.com'
    onSubmit={submitEmail}
    style={{margin: '20px', width: '350px'}}
  />
))
.add('MailChimp Form', () => (
  <MailChimpForm
    style={{margin: '50px'}}
    onSubmit={submitMailchimp}
    isSubscribed={(email) => {action('Check subscription')(email)}}
  />  
));
