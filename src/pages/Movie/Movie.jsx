import React from "react";
import { Card, Container, Row, Spinner, Col } from "react-bootstrap";
import useMovieDB from "../../hooks/useMovieDB";
import { useParams } from "react-router";
import classes from "./Movie.module.scss";
import { Helmet } from "react-helmet";

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`movie/${id}`);

  return (
    <div>
      <Helmet>
        <title>(DMDB)</title>
      </Helmet>
      {loading ? (
        <div className={classes.spinner}>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <div
          className={classes.contain}
          style={{
            background: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <div className={classes.card}>
            <Row>
              <Col xs={12} md={3}>
                <Card className={classes.poster}>
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                  />
                </Card>
              </Col>
              <Col xs={12} md={9} className={classes.title}>
                <h1>{data.original_title}</h1>
                <p>
                  <span> {data.genres[0].name} </span>,
                  <span> {data.genres[1]?.name} </span>
                </p>
                <p>{data.release_date}</p>
                <div className={classes.vote}>
                  {data.vote_average * 10}
                  <sup style={{ fontSize: 10 }}>%</sup>
                </div>
                <p>{data.tagline}</p>
                <h4>overview :</h4>
                <p>{data.overview}</p>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}
