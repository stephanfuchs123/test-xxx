import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import MovieData from "../views/backend/movie-data/movie-data";
import "./movieCard.css";
import { SwiperSlide } from "swiper/react";

const MovieCard = ({ movie, type }) => {
  const history = useHistory(); // Initialize useHistory for navigation
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);

  // Define parseStringToArray within the component
  const parseStringToArray = (str) => {
    if (!str) return [];
    const genres = str
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^'|'$/g, ""));
    genres.sort((a, b) => a.length - b.length);
    return genres.slice(0, 3);
  };

  const fetchMovieDataById = useCallback(
    async (id) => {
      let isMounted = true;
      try {
        const adjustedType = type === "movies" ? "movie" : "series";
        const response = await fetch(
          `https://dashboard.ucqire.com/api/by-id-${adjustedType}?id=${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch movie data: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) return data[0];
      } catch (error) {
        console.error("Error fetching movie data:", error.message);
      } finally {
        isMounted = false;
      }
    },
    [type]
  );

  const handleMovieClick = useCallback(
    async (movie) => {
      if (selectedMovie?.id === movie.id) return;
      setSelectedMovie(movie);
      const data = await fetchMovieDataById(movie.id);
      if (data) {
        setMovieData(data);
      }
    },
    [fetchMovieDataById, selectedMovie]
  );

  const handlePlayButtonClick = useCallback(
    (id) => {
      // Navigate to /movie/id
      history.push(`/movie/${id}`);
    },
    [history]
  );
  

  return (
    <>
      <SwiperSlide
        key={movie.id}
        className="slide-item"
        onClick={() => handleMovieClick(movie)}
      >
        <div className="block-images1 block-images position-relative">
          <div className="img-box">
            <img
              src={movie.poster}
              className="img-fluid"
              alt={movie.title_eng || "Movie Poster"}
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
                  <i className="ri-arrow-down-s-line"></i>
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
              <span className="imdb-badge imdb-slide">IMDB: {movie.imdb}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {selectedMovie && movieData && (
        <MovieData
          movie={movieData}
          onPlay={() => handlePlayButtonClick(movieData.id)}
        />
      )}
    </>
  );
};

export default MovieCard;
