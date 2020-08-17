import { actions, types } from '..';

describe('auth actions', () => {
  it('should create an action for setCurrentUser', () => {
    const user = {
      id: 1,
    };

    const expectedAction = {
      type: types.SET_CURRENT_USER,
      payload: {
        user,
      },
    };

    expect(actions.setCurrentUser(user)).toEqual(expectedAction);
  });

  it('should create an action for logout', () => {
    const expectedAction = {
      type: types.LOGOUT,
    };

    expect(actions.logout()).toEqual(expectedAction);
  });
});
