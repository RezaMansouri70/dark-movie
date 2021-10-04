import React from "react";
import MovieBg from "../../components/Home/MovieBg/MovieBg";
import MovieSlider from "../../components/Home/MovieSlider/MovieSlider";

export default function Home() {
  return (
    <div>
      <MovieSlider />
      <MovieBg />
    </div>
  );
}
