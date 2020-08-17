import { types } from '.';

const initialState = {
  users: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
