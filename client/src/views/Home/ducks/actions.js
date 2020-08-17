import { types } from '.';

const setUsers = (users) => ({
  type: types.SET_USERS,
  payload: {
    users,
  },
});

export default {
  setUsers,
};
