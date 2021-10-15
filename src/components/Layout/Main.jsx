import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Layout.module.scss";
import useMovieDB from "../../hooks/useMovieDB";

export default function Main({ children }) {
  const { data, loading } = useMovieDB("movie/popular", "page=3");
  return (
    <Container>
      <Row>
        <Col md={2} className={classes.sider}>
          {loading ? (
            ""
          ) : (
            <>
              {data?.results.map((v) => {
                return (
                  <img
                    width="50%"
                    src={`https://image.tmdb.org/t/p/w92${v.poster_path}`}
                  />
                );
              })}
              {data?.results.slice(1, 11).map((v) => {
                return (
                  <img
                    width="50%"
                    src={`https://image.tmdb.org/t/p/w92${v.poster_path}`}
                  />
                );
              })}
            </>
          )}
        </Col>
        <Col xs={12} md={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
