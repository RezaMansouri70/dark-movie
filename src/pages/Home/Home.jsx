import React from "react";
import MovieBg from "../../components/Home/MovieBg/MovieBg";
import MovieSlider from "../../components/Home/MovieSlider/MovieSlider";
import MoviesList from "../../components/Home/MoviesList/MoviesList";

export default function Home() {
  return (
    <div>
      <MovieSlider />
      <MovieBg />
      <MoviesList />
    </div>
  );
}
