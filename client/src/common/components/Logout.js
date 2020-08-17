import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actions } from '../../auth/ducks';

const LogoutButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  pointer: cursor;
  border-radius: 5px;
  padding: 2px;
`;

const Logout = ({ dispatch }) => {
  const onClick = () => {
    dispatch(actions.logout());
  };

  return <LogoutButton onClick={onClick}>Log Out</LogoutButton>;
};

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Logout);
