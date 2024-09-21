import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import MovieData from "../movie-data/movie-data";
import VideoPlayer from "../pages/player";

const TrendingSection = ({ trendingData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const mainSwiperRef = useRef(null);

  useEffect(() => {
    if (mainSwiperRef.current) {
      const swiperInstance = mainSwiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.slideNext(); // Automatically advance to the next slide
      }
    }
  }, [trendingData]);

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setVideoUrl("");
  };

  const handleCloseMovieData = () => {
    setSelectedMovie(null);
    setMovieData(null);
  };

  const handlePlay = async (id) => {
    console.log("handlePlay called with id:", id);
    const data = await fetchMovieDataById(id);
    if (data && data.url) {
      setVideoUrl(data.url);
      setIsPlaying(true);
      console.log("Video URL set:", data.url);
    } else {
      console.error("Movie URL not found");
    }
  };

  const fetchMovieDataById = async (id) => {
    try {
      const response = await fetch(
        `https://dashboard.ucqire.com/api/by-id-series?id=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched movie data:", data[0]);
      return data[0];
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return null;
    }
  };

  const handleMovieClick = async (movie) => {
    console.log("handleMovieClick called with movie:", movie);
    setSelectedMovie(movie);
    const data = await fetchMovieDataById(movie.id);
    if (data) {
      setMovieData(data);
      console.log("Movie data set:", data);
    }
  };

  const parseJsonString = (str) => {
    try {
      return JSON.parse(str.replace(/'/g, '"'));
    } catch (error) {
      console.error("Failed to parse JSON string:", str, error);
      return [];
    }
  };

  return (
    <section id="iq-trending" className="s-margin mb-5">
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="main-title">Trending</h4>
            </div>
            <div id="trending-contens">
              <div id="prev4" className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id="next4" className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
              <Swiper
                as="ul"
                thumbs={{ swiper: thumbsSwiper }}
                centeredSlides
                centeredSlidesBounds
                navigation={{
                  prevEl: "#prev4",
                  nextEl: "#next4",
                }}
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                  1500: { slidesPerView: 5 },
                }}
                loop
                ref={mainSwiperRef}
                className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
              >
                {trendingData.map((item, index) => (
                  <SwiperSlide key={index} as="li">
                    <Link to="#">
                      <div className="movie-slick position-relative">
                        <img
                          src={item.poster}
                          className="img-fluid"
                          alt={item.title_eng}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                freeMode
                watchSlidesProgress
                id="trending-slider"
                className="mt-3 list-inline p-0 m-0 d-flex align-items-center iq-rtl-direction"
              >
                {trendingData.map((item, index) => (
                  <SwiperSlide key={index} as="li">
                    <div
                      className="tranding-block position-relative"
                      style={{
                        backgroundImage: `url(${item.poster})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Tab.Container
                        defaultActiveKey={`trending-data${index}`}
                        className="trending-custom-tab"
                      >
                        <div className="tab-title-info position-relative iq-ltr-direction">
                          <Nav
                            as="ul"
                            variant="pills"
                            className="trending-pills nav-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
                          >
                            <Nav.Item as="li" className="nav-item">
                              <Nav.Link
                                href=""
                                eventKey={`trending-data${index}`}
                              >
                                Overview
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <Tab.Content className="trending-content">
                          <Tab.Pane
                            eventKey={`trending-data${index}`}
                            className="overlay-tab show fade"
                          >
                            <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                              <Link to="#" tabIndex="0">
                                <div className="res-logo">
                                  <div className="channel-logo">
                                    <img
                                      src={item.logo}
                                      className="c-logo"
                                      alt="streamit"
                                    />
                                  </div>
                                </div>
                              </Link>
                              <h1 className="trending-text big-title text-uppercase">
                                {item.title_eng}
                              </h1>
                              <div className="d-flex align-items-center text-white text-detail">
                                <span className="badge p-3 imdb-badge">
                                  IMDB {item.imdb}
                                </span>
                                <span className="trending-year">
                                  {item.year}
                                </span>
                              </div>
                              <div className="d-flex align-items-center series mb-4">
                                <Link to="#">
                                  <img
                                    src={item.label}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Link>
                                <span className="text-gold ml-3">
                                  {item.rank}
                                </span>
                              </div>

                              <div className="p-btns">
                                <div className="d-flex align-items-center p-0">
                                  <button
                                    className="btn btn-hover iq-button"
                                    onClick={() => handleMovieClick(item)}
                                  >
                                    <i
                                      className="fa fa-play mr-2"
                                      aria-hidden="true"
                                    ></i>
                                    Play Now
                                  </button>
                                </div>
                              </div>
                              <div className="trending-list mt-4">
                                <div className="text-primary title">
                                  მსახიობები:{" "}
                                  <span className="text-body">
                                    {parseJsonString(item.msaxiobebi).join(
                                      ", "
                                    )}
                                  </span>
                                </div>
                                <div className="text-primary title">
                                  ჯანრი:{" "}
                                  <span className="text-body">
                                    {parseJsonString(item.janri).join(", ")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
      {selectedMovie && movieData && (
        <MovieData
          movie={movieData}
          onClose={handleCloseMovieData}
          onPlay={() => handlePlay(selectedMovie.id)}
        />
      )}
      {isPlaying && <VideoPlayer url={videoUrl} onClose={handleClosePlayer} />}
    </section>
  );
};

export default TrendingSection;
