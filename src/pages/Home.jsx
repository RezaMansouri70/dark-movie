import React from "react";
import HomePage from "../components/HomePage/HomePage";
import HomeSwiper from "../components/Swiper/HomeSwiper";
import useMovieDB from "../hooks/useMovieDB";
import { Helmet } from "react-helmet";

export default function Home() {
  const { data, loading } = useMovieDB("movie/popular");
  return (
    <>
      <Helmet>
        <title>Dark Movie Database (DMDB)</title>
        <meta
          name="description"
          content="Dark Movie Database (DMDB) is a popular, user editable database for movies and TV shows."
        />
      </Helmet>
      {loading ? (
        <div style={{ textAlign: "center", color: "#fff", fontSize: "30px" }}>
          Try with VPN
        </div>
      ) : (
        <>
          <HomeSwiper dir="rtl" url="movie/popular" />
          <HomeSwiper url="tv/popular" />
          <HomeSwiper dir="rtl" url="movie/popular" page={2} />
          <HomePage />
        </>
      )}
    </>
  );
}
