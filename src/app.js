import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header"

import Login from "./components/Login";
import SecureRoute from "./components/SecureRoute";
import Sidebar from "./components/Sidebar";
import ProductIndex from "./components/ProductIndex";
import ProductShow from "./components/ProductShow";
import AdminUserIndex from "./components/admin/AdminUserIndex";
import AdminUserAdd from "./components/admin/AdminUserAdd";
import AdminSidebar from "./components/admin/AdminSidebar";
import AdminProductIndex from "./components/admin/AdminProductIndex";
import AdminProductAdd from "./components/admin/AdminProductAdd";

class App extends React.Component {
  render() {
    const isLoggedIn = true;
    return (
      <BrowserRouter>
        <div className="mainpage">
          <Header />
          <main className="main">
            <Sidebar />
            <div className="content">
              <Switch>
                <Route path="/login" component={Login} />
                <SecureRoute path="/admin/products" exact={true} component={AdminProductIndex} />
                <SecureRoute path="/admin/products/add" exact={true} component={AdminProductAdd} />
                <SecureRoute path="/admin/users/" exact={true} component={AdminUserIndex} />
                <SecureRoute path="/admin/users/add" exact={true} component={AdminUserAdd} />
                <SecureRoute path="/products" exact={true} component={ProductIndex} />
                <SecureRoute path="/products/:id" exact={true} component={ProductShow} />
              </Switch>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
