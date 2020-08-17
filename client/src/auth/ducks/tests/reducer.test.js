import authReducer from '..';
import { types } from '..';

describe('auth reducer', () => {
  it('should return initialState', () => {
    expect(authReducer(undefined, {})).toStrictEqual({
      currentUser: null,
    });
  });

  it('should handle SET_CURRENT_USER', () => {
    const user = {
      id: 1,
      name: 'User 1',
    };

    expect(
      authReducer(
        {
          currentUser: null,
        },
        {
          type: types.SET_CURRENT_USER,
          payload: {
            user,
          },
        }
      )
    ).toStrictEqual({
      currentUser: user,
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer(
        {
          currentUser: { id: 1 },
        },
        {
          type: types.LOGOUT,
        }
      )
    ).toStrictEqual({
      currentUser: null,
    });
  });
});
