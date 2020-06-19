import React from "react";
import AdminProductIndex from "./AdminProductIndex";
import AdminProductAdd from "./AdminProductAdd";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminUserIndex from "./AdminUserIndex";
import AdminUserAdd from "./AdminUserAdd";
import AdminSidebar from "./AdminSidebar";

class AdminRoutes extends React.Component {
    render() {
        const isLoggedIn = true;
        return (
            <BrowserRouter>
                <React.Fragment>
                    <AdminSidebar />
                    <Switch>
                        <Route path="/admin/products" exact={true} component={AdminProductIndex} />
                        <Route path="/admin/products/add" exact={true} component={AdminProductAdd} />
                        <Route path="/admin/users" exact={true} component={AdminUserIndex} />
                        <Route path="/admin/users/add" exact={true} component={AdminUserAdd} />
                    </Switch>
                </React.Fragment>

            </BrowserRouter>
        );
    }
}

export default AdminRoutes;