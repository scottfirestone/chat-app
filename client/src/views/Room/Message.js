import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMessage = styled.div`
  color: ${({ color }) => `#${color}`};
  padding: 10px;
  border: 1px solid #666;
  background-color: #ddd;
  margin-bottom: 10px;
`;

const Message = ({ message }) => (
  <StyledMessage color={message.user_color}>
    {message.user_name} ({message.created_at}): {message.content}
  </StyledMessage>
);

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
