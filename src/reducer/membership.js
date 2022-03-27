import { CHANGE_LEVEL } from '../container/get-involved/join/join';


const initState = {
  MemberInfo: {
    level: 'standard',
    price: '$50',
  },
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
