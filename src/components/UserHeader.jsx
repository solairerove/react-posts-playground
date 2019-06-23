import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }

  return <div className="header">{user.name}</div>;
};

UserHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    userId: PropTypes.number,
  }),
};

UserHeader.defaultProps = {
  user: null,
};

const mapStateToPros = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId),
});

export default connect(mapStateToPros)(UserHeader);
