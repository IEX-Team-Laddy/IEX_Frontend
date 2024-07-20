import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, user, ...rest }) => {
  if (user.role !== 'coordinator') {
    return <Navigate to="/unauthorised" />;
  }
  return <Component {...rest} />;
};

export default ProtectedRoute;