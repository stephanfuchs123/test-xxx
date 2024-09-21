import React, { useState, useCallback, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./slide.css";
import MovieData from "../views/backend/movie-data/movie-data";

const Slide = ({ data, next, type }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const history = useHistory(); // Initialize useHistory for navigation
  const swiperRef = useRef(null);

  const parseStringToArray = (str) => {
    const genres = str
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^'|'$/g, ""));
    genres.sort((a, b) => a.length - b.length);
    return genres.slice(0, 3);
  };

  useEffect(() => {
    if (swiperRef.current && data.length) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    }
  }, [data]);

  const fetchMovieDataById = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://dashboard.ucqire.com/api/by-id-${type}?id=${id}`
        );
        console.log("type: ", type);
        console.log("ID: ", id);
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        console.log("returned data: ", data[0]);
        return data[0];
      } catch (error) {
        console.error("Error fetching movie data:", error);
        alert("Unable to load movie data. Please try again later.");
        return null;
      }
    },
    [type]
  );

  const handleMovieClick = useCallback(
    async (movie) => {
      console.log("this is now: ", movie);
      setSelectedMovie(movie);
      const data = await fetchMovieDataById(movie.id);
      if (data) {
        setMovieData(data);
      }
    },
    [fetchMovieDataById]
  );

  const handleCloseMovieData = useCallback(() => {
    setSelectedMovie(null);
    setMovieData(null);
    console.log("cleared everything");
  }, []);

  const handlePlayButtonClick = useCallback(
    async (id, type) => {
      console.log("Play button clicked for ID:", id);
      const data = await fetchMovieDataById(id);

      if (data) {
        if (type === "movies" && data.url) {
          history.push(`/movie/${id}`);
        } else if (type === "series") {
          handleMovieClick(data);
        } else {
          console.error("Unexpected type or missing URL for ID:", id);
        }
      }
    },
    [fetchMovieDataById, handleMovieClick, history]
  );

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        navigation={{
          nextEl: `#next${next}`,
          prevEl: `#prev${next}`,
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, // Show 3 slides for mobile screens
          550: { slidesPerView: 4 },
          768: { slidesPerView: 3 }, // Ensure 3 slides for mobile phones
          991: { slidesPerView: 4 },
          1400: { slidesPerView: 6 },
          1600: { slidesPerView: 7 },
        }}
        className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className="slide-item">
            <div className="block-images1 block-images position-relative">
              <div className="img-box">
                <img
                  src={movie.poster}
                  className="img-fluid"
                  alt={movie.title_eng}
                />
              </div>
              <div className="block-social-info">
                <ul className="list-inline p-0 m-0 music-play-lists">
                  <li>
                    <span onClick={() => handlePlayButtonClick(movie.id)}>
                      <i className="fa fa-play"></i>
                    </span>
                  </li>
                </ul>
                <ul className="list-inline p-0 m-0 music-play-lists">
                  <li>
                    <span>
                      <i
                        className="ri-arrow-down-s-line"
                        onClick={() => handleMovieClick(movie)}
                      ></i>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="movie-details">
                <div className="movie-meta">
                  <div className="text-primary title genres">
                    <span className="text-body">
                      {parseStringToArray(movie.janri).join(" ● ")}
                    </span>
                  </div>
                </div>
                <div className="bottom-meta">
                  <span className="year">{movie.year}</span>
                  <span className="imdb-badge imdb-slide">
                    IMDB: {movie.imdb}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedMovie && movieData && (
        <MovieData
          movie={movieData}
          onClose={handleCloseMovieData}
          onPlay={() => handlePlayButtonClick(movieData.id)}
        />
      )}
    </>
  );
};

export default Slide;
