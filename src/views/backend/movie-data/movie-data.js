import React, { useEffect, useRef, useState, useCallback } from "react";
import "./movie-data.css";
import Episodes from "./Episodes"; // Ensure you have this path correct

const MovieData = ({ movie, onClose, onPlay, url }) => {
  const movieCardRef = useRef(null);
  const videoRef = useRef(null);
  const episodesRef = useRef(null); // Reference to the episodes section
  const [isMuted, setIsMuted] = useState(false);

  const handleClickOutside = useCallback((event) => {
    if (movieCardRef.current && !movieCardRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]); // include all dependencies that can change over time

  const parseStringToArray = (str) => {
    if (!str || typeof str !== "string") {
      return [];
    }
    return str
      .slice(1, -1) // Remove the square brackets
      .split(",") // Split by comma
      .map((item) => item.trim().replace(/^'|'$/g, "")) // Trim and remove surrounding single quotes
      .slice(0, 17); // Take the first 17 items
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handlePlayClick = () => {
    if (movie.type === "tv_series" && episodesRef.current) {
      episodesRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      onPlay(movie.id); // Use the onPlay function with movie.id
    }
  };

  if (!movie) {
    return null; // Render nothing if movie is null
  }

  return (
    <div className="movie-card-overlay">
      <div className="movie-card" ref={movieCardRef}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <div className="video-container">
          {movie.trailer_links ? (
            <>
              <video
                className="movie-video"
                src={movie.trailer_links}
                autoPlay
                ref={videoRef}
                muted={isMuted}
                onError={(e) => console.error("Video loading error: ", e)}
              />
              <button className="mute-button" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`}></i>
              </button>
              
            </>
          ) : (
            <div className="trailer-not-found">Trailer was not found</div>
          )}
          <button
                onClick={handlePlayClick}
                className="btn btn-hover iq-button data-play"
                aria-label="Play"
              >
                <i className="fa fa-play mr-2" aria-hidden="true"></i>
                Play Now
              </button>
        </div>
        <div className="movie-content">
          <h1 className="movie-title">{movie.title_eng}</h1>
          <p className="movie-description">{movie.description}...</p>
          <div className="movie-info">
            <div className="left-details">
              <p>
                <strong>რეჟისორი: </strong>{" "}
                {parseStringToArray(movie.rejisori).join(", ")}
              </p>
              <p>
                <strong>ქვეყანა: </strong>{" "}
                {parseStringToArray(movie.qveyana).join(", ")}
              </p>
              <p>
                <strong>წელი: </strong> {movie.year}
              </p>
              <p>
                <span className="imdb-badge">IMDB {movie.imdb}</span>
              </p>
            </div>
            <div className="right-details">
              <p>
                <strong>მსახიობები: </strong>{" "}
                {parseStringToArray(movie.msaxiobebi).join(", ")}
              </p>
            </div>
          </div>
        </div>

        {movie.type === "tv_series" && (
          <div className="episodes-section" ref={episodesRef}>
            <Episodes
              episodes={
                typeof movie.urls === "string"
                  ? JSON.parse(movie.urls)
                  : movie.urls
              }
            />
          </div>
        )}

        <div className="similar-movies">
          <h2>მსგავსი ფილმები</h2>
          <hr />
          <div className="coming_soon">
            <p>ფუნქცია მალე დაემატება</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
