import { WRITE_SUCCESS, WRITE_FAILURE } from '../actions/send-email';


const initState = {
  writeSuccess: null,
};

export default function Email(state=initState, action) {
  switch(action.type) {
    case WRITE_SUCCESS:
      return {
        ...state,
        writeSuccess: true,
      };
    case WRITE_FAILURE:
      return {
        ...state,
        writeSuccess: false,
      };
    default:
      return state;
  }
};
