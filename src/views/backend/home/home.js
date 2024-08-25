import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import axios from "axios";

import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import FsLightbox from "fslightbox-react";
import logo from "../../../assets/images/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation,Thumbs, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import Slide from "../../../components/Slide";
import UpcomingSlide from "../../../components/Upcoming-slide";
import MovieData from "../movie-data/movie-data";
import VideoPlayer from "../pages/player";
import TrendingSection from "./TrendingSlide";

SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

const gsapAnimate = {
  getData: (elem) => {
    const option = {
      opacity: 0,
      scale: 1,
      position: {
        x: 0,
        y: 0,
      },
      ease: "",
      duration: 1,
      delay: 0.4,
      rotate: 0,
    };
    if (elem !== undefined) {
      option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);
      option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);
      option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);
      option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);
      option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);
      option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);
      option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1);
      option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");
      const setOption = {
        opacity: option.opacity,
        scale: option.scale,
        x: option.position.x,
        y: option.position.y,
        ease: option.ease,
        rotate: option.rotate,
        duration: option.duration,
        delay: option.delay,
      };
      return setOption;
    } else {
      return { opacity: 0 };
    }
  },
  onStart: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    gsap.from(elem, setOption);
  },
  onEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    gsap.to(elem, setOption);
  },
  onStartEnd: (elem) => {
    const setOption = gsapAnimate.getData(elem);
    const setEndOption = gsapAnimate.getData(elem);
    setEndOption.opacity = 1;
    setEndOption.x = 0;
    setEndOption.y = 0;
    setEndOption.rotate = 0;
    setEndOption.scale = 1;
    gsap.fromTo(elem, setOption, setEndOption);
  },
  validValue: (attr, defaultVal) => {
    if (attr !== undefined && attr !== null) {
      return Number(attr);
    }
    return Number(defaultVal);
  },
};

const Homepage = () => {

  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dashboard.ucqire.com/api/popularuli-series"
        );
        setTrendingData(response.data);
        console.log("req sent");
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null); // Change to null initially
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [toggler, setToggler] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);
  const [lastAddedSliderData, setLastAddedSliderData] = useState([]);
  const [lastAddedSeriesSliderData, setLastAddedSeriesSliderData] = useState([]);
  const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://dashboard.ucqire.com/api/movie-carousel");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data); // Log the entire response
      setMovies(data); // Assuming data is an array of movie objects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetch("https://dashboard.ucqire.com/api/axal_damatebli_serialebi")
      .then((response) => response.json())
      .then((data) => setLastAddedSeriesSliderData(data))
      .catch((error) => console.error("Error fetching data for series slider:", error));
  }, []);

  useEffect(() => {
    fetch("https://dashboard.ucqire.com/api/axal-damatebulebi")
      .then((response) => response.json())
      .then((data) => setLastAddedSliderData(data))
      .catch((error) => console.error("Error fetching data for movie slider:", error));
  }, []);

  useEffect(() => {
    fetch("https://dashboard.ucqire.com/api/upcoming_movies")
      .then((response) => response.json())
      .then((data) => setUpcomingMoviesData(data))
      .catch((error) => console.error("Error fetching data for upcoming movies slider:", error));
  }, []);

  const fetchMovieDataById = async (id) => {
    try {
      const response = await fetch(`https://dashboard.ucqire.com/api/by-id-movie?id=${id}`);
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

  const handleMovieClick = async (movie) => {
    console.log("handleMovieClick called with movie:", movie); // Add this line to debug
    setSelectedMovie(movie);
    const data = await fetchMovieDataById(movie.id);
    if (data) {
      setMovieData(data);
      console.log("Movie data set:", data); // Add this line to debug
    }
  };

  const handleCloseMovieData = () => {
    setSelectedMovie(null);
    setMovieData(null);
  };

  const handlePlay = async (id) => {
    console.log("handlePlay called with id:", id); // Add this line to debug
    const data = await fetchMovieDataById(id);
    if (data && data.url) { // Ensure the movie data has a URL field
      setVideoUrl(data.url);
      setIsPlaying(true);
      console.log("Video URL set:", data.url); // Add this line to debug
    } else {
      console.error("Movie URL not found");
    }
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setVideoUrl("");
  };

  const animationInit = () => {
    if (document.querySelector(".swiper-container .swiper-slide-active") !== null) {
      const gsapElem = document
        .querySelector(".swiper-container .swiper-slide-active")
        .querySelectorAll('[data-iq-gsap="onStart"]');
      Array.from(gsapElem, (elem) => gsapAnimate.onStartEnd(elem));
    }
  };

  const parseStringToArray = (str) => {
    return str
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^'|'$/g, ""));
  };

  // trending fetch
  

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          <iframe
            src={trailerUrl}
            title=" "
            width="500px"
            height="200px"
            frameBorder="1"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />
      <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
        <div id="prev5" className="swiper-button swiper-button-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div id="next5" className="swiper-button swiper-button-next">
          <i className="fa fa-chevron-right"></i>
        </div>
        <Swiper
          navigation={{
            prevEl: "#prev5",
            nextEl: "#next5",
          }}
          pagination={{
            clickable: true,
          }}
          onInit={() => {
            animationInit();
          }}
          onSlideChangeTransitionStart={() => animationInit()}
          loop={true}
          id="home-slider"
          className="slider m-0 p-0"
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={index}
              className="slide slick-bg s-bg-1"
              style={{
                backgroundImage: `url(${movie.poster})`,
              }}
            >
              <Container fluid className="position-relative h-100">
                <div className="slider-inner h-100">
                  <Row className="align-items-center  iq-ltr-direction h-100 ">
                    <Col xl="6" lg="12" md="12">
                      <Link to="#">
                        <div className="channel-logo" data-iq-delay="0.5">
                          <img src={logo} className="c-logo" alt="streamit" />
                        </div>
                      </Link>
                      <h1
                        className="slider-text big-title title text-uppercase"
                        data-iq-gsap="onStart"
                        data-iq-position-x="-200"
                      >
                        {movie.title_eng}
                      </h1>
                      <div className="d-flex flex-wrap align-items-center">
                        <div
                          className="slider-ratting d-flex align-items-center mt-2 mt-md-3"
                          data-iq-gsap="onStart"
                          data-iq-position-x="-200"
                          data-iq-delay="-0.5"
                        ></div>
                        <div
                          className="d-flex align-items-center mt-2 mt-md-3"
                          data-iq-gsap="onStart"
                          data-iq-position-x="-200"
                          data-iq-delay="-0.5"
                        >
                          <span
                            data-iq-gsap="onStart"
                            data-iq-position-x="-200"
                            className="badge imdb-rating badge-secondary p-2"
                          >
                            IMDB: {movie.imdb}
                          </span>{" "}
                        </div>
                      </div>
                      <div
                        className="trending-list"
                        data-wp_object-in="fadeInUp"
                        data-delay-in="1.2"
                      >
                        <p
                          data-iq-gsap="onStart"
                          data-iq-position-y="80"
                          data-iq-delay="0.8"
                        >
                          {movie.agwera}...
                        </p>
                        <div
                          className="text-primary title genres"
                          data-iq-gsap="onStart"
                          data-iq-position-y="80"
                          data-iq-delay="0.8"
                        >
                          ჟანრი:{" "}
                          <span className="text-body">
                            {parseStringToArray(movie.janri).join(", ")}
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center r-mb-23"
                        data-iq-gsap="onStart"
                        data-iq-position-y="80"
                        data-iq-delay="0.8"
                      >
                        <button
                          className="btn btn-hover iq-button"
                          onClick={() => {
                            console.log("Movie Object:", movie); // Log the movie object
                            handlePlay(movie.id); // Pass the movie ID
                          }}
                        >
                          <i className="fa fa-play mr-2" aria-hidden="true"></i>
                          Play Now
                        </button>
                        <span
                          className="more-info"
                          onClick={() => handleMovieClick(movie)}
                        >
                          More Info
                        </span>
                      </div>
                    </Col>
                    <Col
                      xl="5"
                      lg="12"
                      md="12"
                      className="trailor-video text-center"
                    >
                      <Link
                        onClick={() => {
                          setToggler(!toggler);
                          setTrailerUrl(movie.trailer_link);
                        }}
                        to="/"
                        className="video-open playbtn"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="80px"
                          height="80px"
                          viewBox="0 0 213.7 213.7"
                          enableBackground="new 0 0 213.7 213.7"
                          xmlSpace="preserve"
                        >
                          <polygon
                            className="triangle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "
                          />
                          <circle
                            className="circle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                          />
                        </svg>
                        <span className="w-trailor">Watch Trailer</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="main-content">
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">ბოლოს დამატებული ფილმები</h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <div>
                    <Slide type={"movie"} data={lastAddedSliderData} next={1} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">ბოლოს დამატებული სერიალები</h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next2" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <div>
                    <Slide type={"series"} data={lastAddedSeriesSliderData} next={2} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-favorites">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">მალე დაემატება</h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <div>
                    <UpcomingSlide data={upcomingMoviesData} onPlay={handlePlay} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section id="iq-trending" className="s-margin">
          {" "}
          <Container fluid>
            {" "}
            <Row>
              {" "}
              <Col sm="12" className="overflow-hidden">
                {" "}
                 */}
                <TrendingSection trendingData={trendingData}/>
              {/* </Col>
            </Row>
          </Container>
        </section> */}
      </div>

      {selectedMovie && movieData && (
        <MovieData
          movie={movieData}
          onClose={handleCloseMovieData}
          onPlay={() => handlePlay(selectedMovie.id)} // Pass the ID of the selected movie
        />
      )}
      {isPlaying && <VideoPlayer url={videoUrl} onClose={handleClosePlayer} />}
    </>
  );
};

export default Homepage;
