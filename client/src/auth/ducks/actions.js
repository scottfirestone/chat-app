import types from './types';

const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  payload: {
    user,
  },
});

const logout = () => ({
  type: types.LOGOUT,
});

export default {
  setCurrentUser,
  logout,
};
