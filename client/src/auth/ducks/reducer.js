import { types } from '.';

const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
