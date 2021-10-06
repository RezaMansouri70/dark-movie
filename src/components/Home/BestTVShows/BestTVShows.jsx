import React from "react";
import uswMovieDB from "../../../hooks/useMovieDB";
import classes from "./BestTVShows.module.scss";
import { Link } from "react-router-dom";

import "swiper/swiper-bundle.css";
import { Card, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
]);

export default function BestTVShows() {
  const { data, loading } = uswMovieDB("tv/popular");
  return (
    <div className={classes.slider}>
      {loading ? (
        <div className={classes.spinner}>
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      ) : (
        <Swiper
          slidesPerView={6}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper2"
        >
          {data?.results.map((movie) => {
            return (
              <SwiperSlide key={movie.id} style={{ padding: 20 }}>
                <Link to={`/tv/${movie.id}`}>
                  <Card className={classes.card}>
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    />
                    <Card.Body className={classes.cardBody}>
                      <Card.Title className={classes.title}>
                        {movie.original_name}
                      </Card.Title>
                      <Card.Text>{movie.first_air_date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
