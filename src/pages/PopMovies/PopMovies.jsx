import React from "react";
import { Col, Row, Card, Spinner, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import useMovieDB from "../../hooks/useMovieDB";
import classes from "./PopMovies.module.scss";

export default function PopMovies() {
  const { data, loading } = useMovieDB("movie/popular");

  return (
    <div className={classes.row}>
      <h1>Popular Movies</h1>
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
                          <sup style={{ fontSize: 10 }}>%</sup>
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
