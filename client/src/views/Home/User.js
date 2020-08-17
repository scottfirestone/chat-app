import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px 0;
  pointer; cursor;
`;

const User = ({ name, onClick }) => (
  <UserListItem>
    <button onClick={onClick}>{name}</button>
  </UserListItem>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default User;
