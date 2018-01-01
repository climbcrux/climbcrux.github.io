import { combineReducers } from 'redux';

import Events from './events';
import Membership from './membership-level';

export default combineReducers({
  Events,
  Membership,
});
