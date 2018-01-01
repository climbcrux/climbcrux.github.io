import { CHANGE_LEVEL } from '../container/join/join';


const initState = {
  level: 'standard',
  price: '$50',
};

export default function Membership(state=initState, action) {
  switch(action.type) {
    case CHANGE_LEVEL: 
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
