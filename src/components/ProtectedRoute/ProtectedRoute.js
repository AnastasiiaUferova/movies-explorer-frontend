import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoutes = ({ children, ...props}) => {
  const authed = props.loggedIn 
  return authed ? children : <Navigate to="/" />;
    }

export default ProtectedRoutes; 