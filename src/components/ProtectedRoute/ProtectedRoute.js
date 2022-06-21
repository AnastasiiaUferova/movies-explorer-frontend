/*import React from 'react'
	
	import {Navigate, Outlet} from 'react-router-dom'
	
	const  ProtectedRoutes=(loggedIn) =>{

    const authed = loggedIn;

  return authed ? <Outlet/> : <Navigate to="/signin"/>
	}
	

	export default ProtectedRoutes;
*/



import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoutes = ({ children, ...props}) => {
  const authed = props.loggedIn 
  return authed ? children : <Navigate to="/signin" />;
    }

export default ProtectedRoutes; 