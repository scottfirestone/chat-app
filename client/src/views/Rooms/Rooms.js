import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import UserName from '../../common/components/UserName';
import constants from '../../constants';

const Rooms = ({ currentUser }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(`${constants.API_URL}/rooms`);
        setRooms(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>
        Welcome, <UserName color={currentUser.color} name={currentUser.name} />!
      </h1>
      {isError && <div>Error fetching that room.</div>}
      {isLoading ? (
        <div>loading rooms...</div>
      ) : rooms ? (
        <>
          <h2>Available Rooms</h2>
          <ul>
            {rooms.map((room) => (
              <li key={room.id} style={{ paddingBottom: '10px' }}>
                <Link to={`/room/${room.id}`}>{room.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};

Rooms.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Rooms);
