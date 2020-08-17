import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewMessageInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const onSubmitClick = (e) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      setMessage('');
      onSubmit(message);
    }
  };

  return (
    <form onSubmit={onSubmitClick}>
      <div>
        <input
          style={{ marginBottom: '20px', width: '100%' }}
          autoFocus
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onSubmitClick} type="submit">
          Send your message
        </button>
      </div>
    </form>
  );
};

NewMessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewMessageInput;
