import React from "react";
import { Col, Row, Card, Spinner, CardDeck } from "react-bootstrap";
import useMovieDB from "../../hooks/useMovieDB";
import classes from "./TopRatedMovies.module.scss";
import { Link } from "react-router-dom";
export default function TopRatedMovies() {
  const { data, loading } = useMovieDB("movie/top_rated");
  return (
    <div className={classes.row}>
      <h1>Top Rated Movies</h1>
      {loading ? (
        <div>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Row>
          <CardDeck>
            {" "}
            {data?.results.map((movie) => {
              return (
                <Col xs={12} md={4} lg={3}>
                  <Card className={classes.card}>
                    <Link to={`/movie/${movie.id}`}>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      />
                      <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.vote}>
                          {movie.vote_average * 10}
                        </Card.Text>
                        <Card.Title className={classes.title}>
                          {movie.original_title}
                        </Card.Title>
                        <Card.Text>{movie.release_date}</Card.Text>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </CardDeck>
        </Row>
      )}
    </div>
  );
}
