import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isLoggedIn, userRole, requiredRole, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userRole: PropTypes.string,
  requiredRole: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
