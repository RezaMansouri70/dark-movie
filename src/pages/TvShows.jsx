import React from "react";
import Layout from "../components/Layout/Layout";
import { Helmet } from "react-helmet";
import TVMoviesList from "../components/TVMoviesList/TVMoviesList";

export default function TVShows() {
  return (
    <Layout>
      <Helmet>
        <title>TV Shows (DMDB)</title>
      </Helmet>
      <TVMoviesList url="tv/popular" title="TV Shows" link="tv" />
    </Layout>
  );
}
