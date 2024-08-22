import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.min.css";

const MovieSwiper = ({ banner, title, ageRating, duration }) => {
  return (
    <div>
      <div id="prev" className="swiper-button swiper-button-prev">
        <i className="ri-arrow-left-s-line"></i>
      </div>
      <div id="next" className="swiper-button swiper-button-next">
        <i className="ri-arrow-right-s-line"></i>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        loop={true}
        className=""
      >
        <SwiperSlide>
          <Link to="/movie-details">
            <div className="shows-img">
              <img src={banner} className="w-100 img" alt="" />
              <div className="shows-content">
                <h4 className="text-white mb-1">{title}</h4>
                <div className="movie-time d-flex align-items-center">
                  <div className="badge badge-secondary p-1 mr-2">{ageRating}</div>
                  <span className="text-white">{duration}</span>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieSwiper;
