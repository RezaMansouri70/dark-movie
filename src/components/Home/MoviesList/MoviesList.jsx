import React from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import BestMovies from "../BestMovies/BestMovies";
import BestTVShows from "../BestTVShows/BestTVShows";

import classes from "./MoviesList.module.scss";

export default function MoviesList() {
  return (
    <div className={classes.container}>
      <div className={classes.bestMovie}>
        <h1>Best Movies</h1>
        <BestMovies />
      </div>
      <div className={classes.bestTV}>
        <h1>Best TV Shows</h1>
        <BestTVShows />
      </div>
    </div>
  );
}
