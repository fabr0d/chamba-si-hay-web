import React, { Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "../../services/AuthService";

export const ProtectedRoute = ({component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() === true ?
                    (<Component {...props}/>):
                    (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location}
                        }}
                    />)
            }
        />
    );
}
