import React from "react";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import useMovieDB from "../../hooks/useMovieDB";
SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
]);

export default function HomeSwiper({ url, page, dir }) {
  const { data, loading } = useMovieDB(url, `page=${page}`);

  return (
    <div style={{ filter: "grayscale(0.7)", marginTop: 30 }}>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Swiper
          slidesPerView={3}
          breakpoints={{
            560: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            850: {
              slidesPerView: 9,
            },
          }}
          dir={dir}
          navigation={{ clickable: false }}
          pagination={{ clickable: false }}
          navigation={false}
          pagination={false}
          speed={50000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
            waitForTransition: true,
          }}
        >
          {data?.results.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div>
                  <img
                    style={{ width: 120, height: 177, borderRadius: 5 }}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
