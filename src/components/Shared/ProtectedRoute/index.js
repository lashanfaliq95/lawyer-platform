import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { node, string } from 'prop-types';
import { roleMap } from 'components/Shared/constants';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isUserLoggedIn = useSelector(
    (state) => !!state.login.userDetails && state.login.userDetails.id,
  );

  const roleId = useSelector(
    (state) => state.login.userDetails && state.login.userDetails.roleId,
  );

  const pathname = roleId === roleMap.experts ? '/pro' : '/';

  return (
    <Route
      {...rest}
      render={(props) =>
        (isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname, state: { from: props.location } }} />
        ))}
    />
  );
};

ProtectedRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
};

export default ProtectedRoute;
