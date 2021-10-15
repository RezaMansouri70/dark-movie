import React from "react";
import Layout from "../components/Layout/Layout";
import { Helmet } from "react-helmet";
import TVMoviesList from "../components/TVMoviesList/TVMoviesList";

export default function Movies() {
  return (
    <Layout>
      <Helmet>
        <title>Movies (DMDB)</title>
      </Helmet>
      <TVMoviesList url="movie/popular" title="Movies" link="movie" />
    </Layout>
  );
}
