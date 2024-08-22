import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MovieCard from "../../../components/MovieCard";
import "./searched.css";
import { Col, Row } from "react-bootstrap";

const Searched = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const searchTerm = queryParams.get("query");

        if (searchTerm) {
          const searchResponse = await axios.get(
            `https://dashboard.ucqire.com/api/all-search?param=${searchTerm}`
          );
          setSearchResults(searchResponse.data);

          const swiperResponse = await axios.get(
            `https://dashboard.ucqire.com/api/movie-carousel`
          )

          console.log("Search Results:", searchResponse.data);
          console.log("Swiper Data:", swiperResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.search]);

  const handleMovieClick = (movie) => {
    // Handle movie click event
    console.log("Movie clicked:", movie);
  };

  const handlePlayButtonClick = (id) => {
    // Handle play button click event
    console.log("Play button clicked for movie id:", id);
  };

  return (
    <>
        <section className="searched-items">

          <div className="containerr">
            <Row className="justify-content-center">
              {searchResults.map((movie) => (
                <Col
                  md={2}
                  key={movie.id}
                  className="mb-4 custom-card"
                >
                  <MovieCard
                    movie={movie}
                    type={movie.type}
                    onClick={handleMovieClick}
                    onPlay={handlePlayButtonClick}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </section>
    </>
  );
};

export default Searched;
