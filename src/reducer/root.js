import { combineReducers } from 'redux';

import Events from './events';
import Membership from './membership-level';
import Email from './email';

export default combineReducers({
  Events,
  Membership,
  Email,
});
