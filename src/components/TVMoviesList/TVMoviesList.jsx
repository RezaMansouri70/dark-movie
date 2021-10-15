import React from "react";
import { Col, Row, Card, Spinner, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import useMovieDB from "../../hooks/useMovieDB";
import classes from "./TVMoviesList.module.scss";

export default function TVMoviesList({ url, title, link }) {
  const { data, loading } = useMovieDB(url);

  return (
    <div className={classes.row}>
      <h1>{title}</h1>
      {loading ? (
        <div className={classes.spinner}>
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="warning" />
        </div>
      ) : (
        <Row>
          <CardDeck>
            {data?.results.map((movie) => {
              return (
                <Col xs={6} sm={6} md={3}>
                  <Card className={classes.card}>
                    <Link to={`/${link}/${movie.id}`}>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      />
                      <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.vote}>
                          {movie.vote_average * 10}
                          <sup style={{ fontSize: 10 }}>%</sup>
                        </Card.Text>

                        <Card.Title className={classes.title}>
                          {link === "tv" ? movie.name : movie.original_title}
                        </Card.Title>
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
