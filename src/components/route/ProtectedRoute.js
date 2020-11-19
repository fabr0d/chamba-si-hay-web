import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";

export const ProtectedRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() === true ? (
          <Route component={component} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
