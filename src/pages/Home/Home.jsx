import React from "react";
import MovieBg from "../../components/Home/MovieBg/MovieBg";
import MovieSlider from "../../components/Home/MovieSlider/MovieSlider";
import MoviesList from "../../components/Home/MoviesList/MoviesList";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Dark Movie Database (DMDB)</title>
        <meta
          name="description"
          content="Dark Movie Database (DMDB) is a popular, user editable database for movies and TV shows."
        />
      </Helmet>
      <MovieSlider />
      <MovieBg />
      <MoviesList />
    </div>
  );
}
