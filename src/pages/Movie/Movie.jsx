import React from "react";
import { Spinner } from "react-bootstrap";
import useMovieDB from "../../hooks/useMovieDB";
import { useParams } from "react-router";

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useMovieDB(`movie/${id}`);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <h1 style={{ margin: 100, color: "#fff" }}>{data?.original_title}</h1>
      )}
    </div>
  );
}
