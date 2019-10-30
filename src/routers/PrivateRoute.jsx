/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ ...props }) => (
        rest.isAuth ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
      )}
    />
  );
}
