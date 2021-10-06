import React from "react";
import { Col, Row, Card, Spinner, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import useMovieDB from "../../hooks/useMovieDB";
import classes from "./TVShows.module.scss";
import { Helmet } from "react-helmet";

export default function TVShows() {
  const { data, loading } = useMovieDB("tv/popular");

  return (
    <div className={classes.row}>
      <Helmet>
        <title>TV Shows (DMDB)</title>
      </Helmet>
      <h1>TV Shows</h1>
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
            {data?.results.map((tv) => {
              return (
                <Col xs={12} md={4} lg={3}>
                  <Card className={classes.card}>
                    <Link to={`/tv/${tv.id}`}>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`}
                      />
                      <Card.Body className={classes.cardBody}>
                        <Card.Text className={classes.vote}>
                          {tv.vote_average * 10}
                          <sup style={{ fontSize: 10 }}>%</sup>
                        </Card.Text>

                        <Card.Title className={classes.title}>
                          {tv.name}
                        </Card.Title>
                        <Card.Text>{tv.first_air_date}</Card.Text>
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
