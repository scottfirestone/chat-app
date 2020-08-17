import homeReducer from '..';
import { types } from '..';

describe('home reducer', () => {
  it('should return initialState', () => {
    expect(homeReducer(undefined, {})).toStrictEqual({
      users: null,
    });
  });

  it('should handle SET_USERS', () => {
    const users = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    expect(
      homeReducer(
        {
          users: null,
        },
        {
          type: types.SET_USERS,
          payload: {
            users,
          },
        }
      )
    ).toStrictEqual({
      users,
    });
  });
});
