import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { node, string } from 'prop-types';

const UnprotectedRoute = ({ component: Component, ...rest }) => {
  const isUserLoggedIn = useSelector(
    (state) => !!state.login.userDetails && state.login.userDetails.id,
  );

  return (
    <Route
      {...rest}
      render={(props) => (isUserLoggedIn ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};

UnprotectedRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
};

export default UnprotectedRoute;
