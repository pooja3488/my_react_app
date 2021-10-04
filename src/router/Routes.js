import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import routes from '../config/constants';
import { ForgotPassword, LogIn, SignUp } from '../modules';

const { FORGOT_PASSWORD, LOGIN, SIGNUP } = routes;

const Routes = (props) => {
    return (
        <Router {...props}>
            <Switch>
                <Route
                    exact
                    path={`${LOGIN}`}
                    component={LogIn}
                />
                <Route
                    exact
                    path={`${FORGOT_PASSWORD}`}
                    component={ForgotPassword}
                />
                <Route
                    exact
                    path={`${SIGNUP}`}
                    component={SignUp}
                />
                <Redirect to={LOGIN} />
            </Switch>
        </Router>
    );
}

export default Routes;
