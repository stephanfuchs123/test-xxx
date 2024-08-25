import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import FilteredMovies from "../movie/filtered-movies";
import Sliders from "./sliders";
import GenreFilter from "../../../components/FilterForm";
import VideoPlayer from "../pages/player";
import "./mini-carousel.css"

const CategoryList = () => {
  const [filters, setFilters] = useState({
    genre: "",
  });
  const [filteredData, setFilteredData] = useState(null);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const fetchFilteredData = useCallback((genre) => {
    const apiUrl = `https://dashboard.ucqire.com/api/filter-movies?janri=${genre}`;
    console.log("Fetching data with URL:", apiUrl);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, []);

  useEffect(() => {
    if (filters.genre) {
      fetchFilteredData(filters.genre);
    } else {
      setFilteredData(null); // Reset filtered data if no genre is selected
    }
  }, [filters, fetchFilteredData]);

  const fetchGenres = async () => {
    try {
      const response = await fetch("https://dashboard.ucqire.com/api/stats");
      if (!response.ok) {
        throw new Error("Failed to fetch genres");
      }
      const data = await response.json();
      setGenres(data.genre || []);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://dashboard.ucqire.com/api/movie-carousel"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterChange = (selectedGenre) => {
    console.log("Selected genre:", selectedGenre);
    setFilters({ genre: selectedGenre });
  };

  const fetchMovieDataById = async (id) => {
    try {
      const response = await fetch(
        `https://dashboard.ucqire.com/api/by-id-movie?id=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched movie data:", data[0]); // Log the fetched data
      return data[0]; // Return the fetched data
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return null; // Return null if there's an error
    }
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setVideoUrl("");
  };

  const handlePlay = async (id) => {
    console.log("handlePlay called with id:", id); // Add this line to debug
    const data = await fetchMovieDataById(id);
    if (data && data.url) {
      // Ensure the movie data has a URL field
      setVideoUrl(data.url);
      setIsPlaying(true);
      console.log("Video URL set:", data.url); // Add this line to debug
    } else {
      console.error("Movie URL not found");
    }
  };

  return (
    <>
      <section id="movieshow" className="iq-main-slider p-0">
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
          initialSlide={1}
          className=""
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div
                className="mini-carousel"
                onClick={() => {
                  console.log("Movie Object:", movie); // Log the movie object
                  handlePlay(movie.id); // Pass the movie ID
                }}
              >
                <div className="shows-img">
                  <img src={movie.poster} className="w-100 img" alt="" />
                  <div className="shows-content">
                    <h4 className="text-white mb-1">
                      {movie.movie_carousel_title}
                    </h4>
                    <div className="movie-time d-flex align-items-center">
                      <span className="text-white">{movie.imdb}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="main-content">
        <GenreFilter onFilterChange={handleFilterChange} />
        <div>
          {!filteredData ? (
            <div>
              <Sliders />
            </div>
          ) : (
            <div className="main-content">
              <section id="iq-favorites">
                <Container fluid>
                  <FilteredMovies
                    filteredData={filteredData}
                    types={"movies"}
                  />
                </Container>
              </section>
            </div>
          )}
        </div>
      </div>
      {isPlaying && <VideoPlayer url={videoUrl} onClose={handleClosePlayer} />}
    </>
  );
};

export default CategoryList;
