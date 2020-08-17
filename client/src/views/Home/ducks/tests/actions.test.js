import { actions, types } from '..';

describe('Home actions', () => {
  it('should create an action for setUsers', () => {
    const users = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const expectedAction = {
      type: types.SET_USERS,
      payload: {
        users,
      },
    };

    expect(actions.setUsers(users)).toEqual(expectedAction);
  });
});
