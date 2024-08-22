import React from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "../../../components/MovieCard";
import "./filtered-movie.css";

const FilteredMovies = ({ filteredData, types }) => {

  console.log(filteredData)
  return (
    <Row className="justify-content-center">
      {filteredData.map((movie) => (
        <Col key={movie.id} className="mb-4 custom-card">
          <MovieCard key={movie.id} movie={movie} type={types} />
        </Col>
      ))}
    </Row>
  );
};

export default FilteredMovies;
