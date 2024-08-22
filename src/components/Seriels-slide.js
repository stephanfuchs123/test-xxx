
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./slide.css"; // Assuming you create a separate CSS file for styling
import MovieData from "../views/backend/movie-data/movie-data";

const SerielsSlide = ({ data, slidesPerView  }) => {

  
  
  const parseStringToArray = (str) => {
    // Parse the string into an array
    const genres = str
      .slice(1, -1) // Remove the square brackets
      .split(",") // Split by comma
      .map((item) => item.trim().replace(/^'|'$/g, "")); // Trim spaces and remove surrounding single quotes

    // Sort genres by length
    genres.sort((a, b) => a.length - b.length);

    // Select the three genres with the smallest length
    return genres.slice(0, 3);
  };

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState([]);

  const fetchMovieDataById = async (id) => {
    try {
      const response = await fetch(
        `https://dashboard.ucqire.com/api/by-id-series?id=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Assuming the response data is the movie data
      setMovieData(data[0]);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    fetchMovieDataById(movie.id);
  };

  const handleCloseMovieData = () => {
    setSelectedMovie(null);
  };

  return (
    <>
       <Swiper
        spaceBetween={20}
        navigation={{
          nextEl: "#next1",
          prevEl: "#prev1",
        }}
        loop={true}
        slidesPerView={slidesPerView} // Number of slides visible at the same time, passed as prop
        breakpoints={{
          320: { slidesPerView: 2 },
          550: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1400: { slidesPerView: 6 }, // Adjusted for desktop view, using prop value
          1600: { slidesPerView: 7 }, // Adjusted for larger desktops, using prop value
        }}
        className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
      >
        {data.map((movie, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div className="block-images1 block-images position-relative">
              <div className="img-box">
                <img src={movie.poster} className="img-fluid" alt="" />
              </div>
              <div className="block-social-info">
                <ul className="list-inline p-0 m-0 music-play-lists">
                  <li>
                    <span>
                      <i className="fa fa-play"></i>
                    </span>
                  </li>
                </ul>
                <ul className="list-inline p-0 m-0 music-play-lists">
                  <li>
                    <span>
                      <i className="ri-arrow-down-s-line" onClick={() => handleMovieClick(movie)}></i>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="movie-details">
                <span className="movieTitle">{movie.title_eng}</span>
                <div className="movie-meta">
                  <div
                    className="text-primary title genres"
                    data-iq-gsap="onStart"
                    data-iq-position-y="80"
                    data-iq-delay="0.8"
                  >
                    <span className="text-body">
                      {parseStringToArray(movie.janri).join(" ● ")}
                    </span>
                  </div>
                </div>
                <div className="bottom-meta">
                  <span className="year">{movie.year}</span>
                  <span className="imdb-badge imdb-slide">IMDB:{movie.imdb}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedMovie && (
        <MovieData movie={movieData} onClose={handleCloseMovieData} onPlay={handlePlay}/>
      )}
    </>
  );
};

export default SerielsSlide;