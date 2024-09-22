import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import Slide from "../../../components/Slide";
import "./filtered-movie.css";

const FilteredMovies = ({ filteredData, types, genre }) => {
  console.log(filteredData);
  console.log("ddsasdff", genre)
  return (
    <section id="iq-favorites">
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="main-title">{genre}</h4>
            </div>
            <div id="favorites-contens">
              <div id="prev1" className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id="next1" className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>

              <div>
                <Slide
                  type={"movie"}
                  data={filteredData}
                  next={1}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    // <Row className="justify-content-center">
    //   {filteredData.map((movie) => (
    //     <Col key={movie.id} className="mb-4 custom-card">
    //       <MovieCard key={movie.id} movie={movie} type={types} />
    //     </Col>
    //   ))}
    // </Row>
  );
};

export default FilteredMovies;
