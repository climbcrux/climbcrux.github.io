import { combineReducers } from 'redux';

import Events from './events';
import Membership from './membership';
import Email from './email';

export default combineReducers({
  Events,
  Membership,
  Email,
});
