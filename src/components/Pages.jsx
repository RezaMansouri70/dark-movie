import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home/Home";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
