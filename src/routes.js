import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
