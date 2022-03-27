import { UPDATE_MEMBERSHIP } from '../container/get-involved/join/join';


const initState = {
  MemberInfo: {
    level: 'standard',
    price: '$50',
  },
};

export default function Membership(state=initState, action) {
  console.log(action);

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
