import { STATES } from './states';

export const schema = {
  name: {required: true},
  pronoun: {},
  email: {required: true, type: 'email'},
  phone: {type: 'tel'},

  // Address
  address: {required: true},
  city: {required: true},
  state: {required: true, type: 'select', options: STATES},
  zip: {required: true},

  // Emergency Contact Info
  contact_name: {required: true},
  contact_phone: {required: true},
  contact_relation: {required: true},

  // Waiver Agreed To
  waived: {required: true, type: 'checkbox'},
};
