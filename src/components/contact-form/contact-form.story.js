import React from 'react';
import { storiesOf } from '@storybook/react';

import ContactForm from './contact-form';


const submitEmail = ({to_email, from_email, subject, message}) => {
  console.log('To: ', to_email)
  console.log('From: ', from_email);
  console.log('Subject: ', subject);
  console.log('Message: ', message);
};


storiesOf('Contact From', module)
.add('Full Screen', () => (
  <ContactForm
    sendTo='test@email.com'
    onSubmit={submitEmail}
    style={{margin: '20px'}}
  />
))
.add('Small Size', () => (
  <ContactForm
    sendTo='test@email.com'
    onSubmit={submitEmail}
    style={{margin: '20px', width: '350px'}}
  />
));
