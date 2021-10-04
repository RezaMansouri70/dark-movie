import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:id">
        <Movie />
      </Route>
    </Switch>
  );
}
