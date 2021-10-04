import React from "react";
import uswMovieDB from "../../../hooks/useMovieDB";
import classes from "./MovieSlider.module.scss";
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

export default function MovieSlider() {
  const { data, loading } = uswMovieDB("movie/now_playing", "page=2");
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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 50,
            modifier: 6,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {data?.results.slice(2, 12).map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Card>
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
