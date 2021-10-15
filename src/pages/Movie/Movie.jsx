import React from "react";
import { Card, Row, Spinner, Col } from "react-bootstrap";
import useMovieDB from "../../hooks/useMovieDB";
import { useParams } from "react-router";
import classes from "./Movie.module.scss";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`movie/${id}`);
  const arr = data?.genres.map(({ name }) => name).join(" , ");
  console.log(arr);
  return (
    <>
      <Header />
      <div>
        <Helmet>
          <title>{data?.original_title}</title>
        </Helmet>
        {loading ? (
          <div className={classes.spinner}>
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          <div
            className={classes.contain}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
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
                  <p>{arr}</p>
                  <p>{data.release_date}</p>
                  <div className={classes.vote}>
                    {data.vote_average * 10}
                    <sup>%</sup>
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
      <Footer />
    </>
  );
}
