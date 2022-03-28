import { UPDATE_MEMBERSHIP } from '../container/get-involved/join/join';


const initState = {
  MemberInfo: {
    level: 'custom',
    price: '$0.01',
  },
};

export default function Membership(state=initState, action) {
  switch(action.type) {
    case UPDATE_MEMBERSHIP:
      return {
        ...state,
        MemberInfo: {
          ...action.payload,
        }
      }
    default:
      return state;
  }
}
