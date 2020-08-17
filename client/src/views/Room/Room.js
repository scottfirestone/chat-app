import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Message from './Message';
import NewMessageInput from './NewMessageInput';
import UserName from '../../common/components/UserName';
import constants from '../../constants';
import utils from './utils';

const Room = ({ currentUser, roomId, cable, users }) => {
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const messagesListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(`${constants.API_URL}/rooms/${roomId}`);
        setRoom(result.data.data);

        // post welcome message
        sendMessage({
          content: utils.generateRandomWelcomeMessage(currentUser.name),
          userId: currentUser.id,
        });
        // subscrube to websockets channel
        subscribeToChannel({ room: result.data.data, cable });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  // scroll to bottom of chat container
  useEffect(() => {
    if (messagesListRef.current) {
      utils.scrollToBottom(messagesListRef.current);
    }
  }, [room]);

  const sendMessage = ({ content, userId }) => {
    const message = {
      content,
      user_id: userId,
      room_id: roomId,
    };
    try {
      axios.post(`${constants.API_URL}/messages`, {
        message: { ...message },
      });
    } catch (error) {
      window.alert('error');
    }
  };

  const subscribeToChannel = ({ room, cable }) =>
    (cable.room = cable.cable.subscriptions.create(
      {
        channel: 'RoomsChannel',
        room: room.id,
      },
      {
        received: (message) => {
          setRoom((room) => ({
            ...room,
            attributes: {
              ...room.attributes,
              messages: [...room.attributes.messages, message],
            },
          }));
        },
      }
    ));

  return (
    <>
      <Link to="/rooms">Go back to rooms...</Link>
      {isLoading ? (
        <div>loading rooms...</div>
      ) : isError ? (
        <div>Error fetching rooms.</div>
      ) : room && room.attributes ? (
        <>
          <h1>
            Welcome to the {room.attributes.name} room,{' '}
            <UserName name={currentUser.name} color={currentUser.color} />!
          </h1>
          {room.attributes.messages ? (
            <div
              ref={messagesListRef}
              style={{ height: '500px', overflowY: 'scroll' }}
            >
              {room.attributes.messages.map((message) => {
                const mappedMessage = utils.mapUserToMessage({
                  message,
                  users,
                });
                return (
                  <Message key={mappedMessage.id} message={mappedMessage} />
                );
              })}
            </div>
          ) : null}
          <NewMessageInput
            onSubmit={(content) =>
              sendMessage({ content, userId: currentUser.id })
            }
          />
        </>
      ) : null}
    </>
  );
};

Room.propTypes = {
  cable: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  roomId: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth.currentUser,
  roomId: parseInt(ownProps.match.params.id),
  users: state.home.users,
});

export default connect(mapStateToProps)(Room);
