const initState = {
  Modal: {
    open: false,
    type: null
  }
};

export const REGISTER_MEMBERSHIP = 'RegisterMember';
export const reducer = (state=initState, action) => {
  console.log(action);

  switch(action.type) {
    case `${REGISTER_MEMBERSHIP}::SUCCESS`:
      return {
        ...state,
        Modal: {
          open: true,
          type: 'payment::success'
        },
      }
    case `${REGISTER_MEMBERSHIP}::FAILED`:
      return {
        ...state,
        Modal: {
          open: true,
          type: 'payment::failed'
        }
      }
    case 'OpenWaiver':
      return {
        ...state,
        Modal: {
          open: true,
          type: "waiver"
        }
      };
    case 'PAYMENT::FAILED':
      return {
        ...state,
        Modal: {
          open: true,
          type: 'payment::failed'
        }
      };
    case 'closeModal':
      return {
        ...state,
        Modal: {
          open: false,
          type: null
        }
      };
    default:
      return state;
  }
}

export default reducer;
