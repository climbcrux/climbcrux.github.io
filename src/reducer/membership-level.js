import { CHANGE_LEVEL } from '../container/join/join';
import { WRITE_SUCCESS, WRITE_FAILURE } from '../actions/record-membership';


const initState = {
  level: 'standard',
  price: '$50',
  writeSuccess: null,
};

export default function Membership(state=initState, action) {
  switch(action.type) {
    case CHANGE_LEVEL: 
      return {
        ...state,
        ...action.payload,
      }
    case WRITE_SUCCESS:
      return {
        ...state,
        writeSuccess: true
      }
    case WRITE_FAILURE:
      return {
        ...state,
        writeSuccess: false,
      }
    default:
      return state;
  }
}
