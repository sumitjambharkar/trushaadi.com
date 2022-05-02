import React from 'react';
import { auth } from './componets/firebase';
import { Route,Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    
  return (
    <Route
      {...rest}
      render={() => auth
        ? children
        : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute