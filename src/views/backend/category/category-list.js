import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Sliders from "./serials-sliders";
import FilteredMovies from "../movie/filtered-movies";
import GenreFilter from "../../../components/FilterForm";

const CategoryList = () => {
  const [filters, setFilters] = useState({
    genre: "",
  });
  const [filteredData, setFilteredData] = useState(null);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchFilteredData = useCallback((genre) => {
    const apiUrl = `https://dashboard.ucqire.com/api/filter-series?janri=${genre}`;
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
              <Link to="/movie-details">
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
              </Link>
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
                    types={"series"}
                  />
                </Container>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
