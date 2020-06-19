import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProductIndex from "./ProductIndex";
import ProductShow from "./ProductShow";
import SecureRoute from './SecureRoute';

class AuthRoutes extends React.Component {
    render() {
        console.log('auth route');

        const isLoggedIn = true;
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Sidebar />
                    <Switch>
                        <SecureRoute path="/product/:id/" exact={true} component={ProductShow} />
                        <SecureRoute path="/" exact={true} component={ProductIndex} />
                    </Switch>
                </React.Fragment>

            </BrowserRouter>
        );
    }
}

export default AuthRoutes;