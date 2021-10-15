import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Movies from "./Movies";
import Movie from "./Movie/Movie";
import TV from "./TV/TV";

import TVShows from "./TvShows";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/movie/:id">
        <Movie />
      </Route>
      <Route path="/tv/:id">
        <TV />
      </Route>
      <Route path="/tv-shows">
        <TVShows />
      </Route>
    </Switch>
  );
}
