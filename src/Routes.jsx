import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import PopMovies from "./pages/PopMovies/PopMovies";
import TopRatedMovies from "./pages/TopRatedMovies/TopRatedMovies";
import TV from "./pages/TV/TV";
import TVShows from "./pages/TVShows/TVShows";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id">
        <Movie />
      </Route>
      <Route path="/tv" exact>
        <TVShows />
      </Route>
      <Route path="/tv/:id">
        <TV />
      </Route>

      <Route path="/pop">
        <PopMovies />
      </Route>
      <Route path="/top">
        <TopRatedMovies />
      </Route>
    </Switch>
  );
}
