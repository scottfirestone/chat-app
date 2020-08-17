import React from 'react';
import PropTypes from 'prop-types';

const UserName = ({ name, color }) => (
  <span style={{ color: `#${color}` }}>{name}</span>
);

UserName.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserName;
