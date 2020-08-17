import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actions as authActions } from '../../auth/ducks';
import { actions as usersActions } from './ducks';
import User from './User';
import UserName from '../../common/components/UserName';
import constants from '../../constants';

const Home = ({ dispatch, history, users }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const onUserClick = (user) => {
    setCurrentUser(user);
  };

  const onRoomsClick = async () => {
    try {
      const result = await axios.post(`${constants.API_URL}/login`, {
        id: currentUser.id,
      });
      await dispatch(
        authActions.setCurrentUser(result.data.user.data.attributes)
      );
      history.push('/rooms');
    } catch (error) {
      window.alert('error logging in with that user');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(`${constants.API_URL}/users`);
        dispatch(usersActions.setUsers(result.data.data));
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isError && <div>Error fetching users.</div>}
      {isLoading || !users ? (
        <div>loading users...</div>
      ) : (
        <>
          <div>Choose a user:</div>
          <ul>
            {users.map((user) => (
              <User
                key={user.id}
                color={user.attributes.color}
                onClick={() => onUserClick(user)}
                name={user.attributes.name}
              />
            ))}
          </ul>
        </>
      )}
      {currentUser && (
        <div>
          You&apos;ve selected{' '}
          <UserName
            name={currentUser.attributes.name}
            color={currentUser.attributes.color}
          />{' '}
          <Link onClick={onRoomsClick} to="/rooms">
            View Chat Rooms
          </Link>
        </div>
      )}
    </>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  users: PropTypes.array,
};

const mapStateToProps = (state) => ({
  users: state.home.users,
});

export default connect(mapStateToProps)(Home);
