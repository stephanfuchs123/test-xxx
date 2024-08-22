// import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-router-dom";
// import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
// import FsLightbox from "fslightbox-react";
// import Select from "react-select";
// // import axios from "axios";

// // img
// import logo from "../../../assets/images/logo.png";
// // import icon from "../../../assets/video/trailer.mp4";

// // favorite img
// // import fav1 from "../../../assets/images/favorite/01.jpg";
// // import fav2 from "../../../assets/images/favorite/02.jpg";
// // import fav3 from "../../../assets/images/favorite/03.jpg";
// // import fav4 from "../../../assets/images/favorite/04.png";
// // import fav5 from "../../../assets/images/favorite/05.jpg";

// // // upcoming img
// // import upcoming1 from "../../../assets/images/upcoming/01.jpg";
// // import upcoming2 from "../../../assets/images/upcoming/02.jpg";
// // import upcoming3 from "../../../assets/images/upcoming/03.jpg";
// // import upcoming4 from "../../../assets/images/upcoming/04.jpg";
// // import upcoming5 from "../../../assets/images/upcoming/05.jpg";

// // // suggested
// // import suggested1 from "../../../assets/images/suggested/01.jpg";
// // import suggested2 from "../../../assets/images/suggested/02.jpg";
// // import suggested3 from "../../../assets/images/suggested/03.jpg";
// // import suggested4 from "../../../assets/images/suggested/04.jpg";
// // import suggested5 from "../../../assets/images/suggested/05.jpg";

// // // parallax
// // import parallax3 from "../../../assets/images/parallax/p1.jpg";
// // import parallax4 from "../../../assets/images/parallax/parallax-logo.png";

// // trending
// // import trending1 from "../../../assets/images/trending/01.jpg";
// // import trending2 from "../../../assets/images/trending/02.jpg";
// // import trending3 from "../../../assets/images/trending/03.jpg";
// // import trending4 from "../../../assets/images/trending/04.jpg";
// // import trending5 from "../../../assets/images/trending/05.jpg";
// // import trending6 from "../../../assets/images/trending/06.jpg";
// // import trendinglabel from "../../../assets/images/trending/trending-label.png";

// // // episodes
// // import episodes1 from "../../../assets/images/episodes/01.jpg";
// // import episodes2 from "../../../assets/images/episodes/02.jpg";
// // import episodes3 from "../../../assets/images/episodes/03.jpg";
// // import episodes4 from "../../../assets/images/episodes/04.jpg";
// // import episodes5 from "../../../assets/images/episodes/05.jpg";

// // tvthrillers
// // import tvthrillers1 from "../../../assets/images/tvthrillers/01.jpg";
// // import tvthrillers2 from "../../../assets/images/tvthrillers/02.jpg";
// // import tvthrillers3 from "../../../assets/images/tvthrillers/03.jpg";
// // import tvthrillers4 from "../../../assets/images/tvthrillers/04.jpg";
// // import tvthrillers5 from "../../../assets/images/tvthrillers/05.jpg";

// // swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";

// import Slide from "../../../components/Slide";
// import UpcomingSlide from "../../../components/Upcoming-slide";
// import MovieData from "../movie-data/movie-data";
// import TrendingSlide from "./TrendingSlide";

// SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination]);

// const gsapAnimate = {
//   getData: (elem) => {
//     const option = {
//       opacity: 0,
//       scale: 1,
//       position: {
//         x: 0,
//         y: 0,
//       },
//       ease: "",
//       duration: 1,
//       delay: 0.4,
//       rotate: 0,
//     };
//     if (elem !== undefined) {
//       option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0);

//       option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0);

//       option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

//       option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

//       option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

//       option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

//       option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1);

//       option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");

//       const setOption = {
//         opacity: option.opacity,
//         scale: option.scale,
//         x: option.position.x,
//         y: option.position.y,
//         ease: option.ease,
//         rotate: option.rotate,
//         duration: option.duration,
//         delay: option.delay,
//       };

//       return setOption;
//     } else {
//       return { opacity: 0 };
//     }
//   },
//   onStart: (elem) => {
//     const setOption = gsapAnimate.getData(elem);

//     gsap.from(elem, setOption);
//   },

//   onEnd: (elem) => {
//     const setOption = gsapAnimate.getData(elem);

//     gsap.to(elem, setOption);
//   },

//   onStartEnd: (elem) => {
//     const setOption = gsapAnimate.getData(elem);

//     const setEndOption = gsapAnimate.getData(elem);

//     setEndOption.opacity = 1;

//     setEndOption.x = 0;

//     setEndOption.y = 0;

//     setEndOption.rotate = 0;

//     setEndOption.scale = 1;

//     gsap.fromTo(elem, setOption, setEndOption);
//   },
//   validValue: (attr, defaultVal) => {
//     if (attr !== undefined && attr !== null) {
//       return Number(attr);
//     }
//     return Number(defaultVal);
//   },
// };

// const Homepage = () => {

//   // const [selectedGenre, setSelectedGenre] = useState("");
//   // const [genres, setGenres] = useState([]);

//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const handleMovieClick = async (movie) => {
//     setSelectedMovie(movie);
//     await fetchMovieDataById(movie.id);
//   };

//   const handleCloseMovieData = () => {
//     setSelectedMovie(null);
//   };

//   ///start of randomizer
//   // useEffect(() => {
//   //   fetchGenres();
//   // }, []);

//   // const fetchGenres = async () => {
//   //   try {
//   //     const response = await fetch("https://dashboard.ucqire.com/api/stats");
//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch genres");
//   //     }
//   //     const data = await response.json();
//   //     // setGenres(data.genre);
//   //   } catch (error) {
//   //     console.error("Error fetching genres:", error);
//   //   }
//   // };

//   const [movieData, setMovieData] = useState([]);

//   // const [ids, setIds] = useState([]);

//   // const handleGenreChange = (event) => {
//   //   setSelectedGenre(event.target.value);
//   // };

//   // const fetchIdsByGenre = async () => {
//   //   if (!selectedGenre) return;

//   //   try {
//   //     const response = await fetch(
//   //       `https://dashboard.ucqire.com/api/filter-movies-genres-id?janri=${selectedGenre}`
//   //     );
//   //     if (!response.ok) {
//   //       throw new Error("Network response was not ok");
//   //     }
//   //     const ids = await response.json(); // Assuming the response data is an array of IDs
//   //     if (ids.length > 0) {
//   //       const randomId = ids[Math.floor(Math.random() * ids.length)];
//   //       fetchMovieDataById(randomId);
//   //     } else {
//   //       console.log("No IDs found for the selected genre.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching IDs:", error);
//   //   }
//   // };

//   const fetchMovieDataById = async (id) => {
//     try {
//       console.log(id);
//       const response = await fetch(`https://dashboard.ucqire.com/api/by-id-movie?id=${id}`);
//       console.log("response", response);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json(); // Convert the response to JSON
//       console.log("es ari data bro", data);
//       setMovieData(data[0]); // Assuming setMovieData is defined elsewhere and updates the state
//       console.log("es ari bro", movieData); // Log the actual data
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     }
//   };

//   // const fetchIdsByGenre = () => {
//   //   try {
//   //     // Fetch IDs by genre

//   //     // const fetchedIds = response.data.ids;
//   //     // setIds(fetchedIds);

//   //     fetch(`https://dashboard.ucqire.com/api/filter-movies-genres-id?janri=${selectedGenre}`)
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Network response was not ok");
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       // Set filtered data in state
//   //       setIds(data);
//   //       // Update state to indicate filters applied
//   //       console.log(ids)
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching data:", error);
//   //       // Display error message to the user (optional)
//   //     });

//   //     // Select a random ID from the fetched IDs
//   //     if (ids.length > 0) {
//   //       const randomId =
//   //         ids[Math.floor(Math.random() * ids.length)];
//   //       console.log("Random ID:", randomId);

//   //       // Fetch data by the random ID
//   //       fetch(`https://dashboard.ucqire.com/api/by-id-movie?id=${randomId}`)
//   //       .then((response) => {
//   //         if (!response.ok) {
//   //           throw new Error("Network response was not ok");
//   //         }
//   //         return response.json();
//   //       })
//   //       .then((data) => {
//   //         // Set filtered data in state
//   //         setMovieData(data);
//   //         console.log(movieData)
//   //         // Update state to indicate filters applied
//   //         // setFiltersApplied(true);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching data:", error);
//   //         // Display error message to the user (optional)
//   //       });

//   //       // Do something with the movie data, e.g., set state or display
//   //       // setMovieData(movieDataa); // Assuming you have a state or function to handle this
//   //       // console.log(movieData.imdb);
//   //     } else {
//   //       console.log("No IDs found for the selected genre");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching IDs:", error);
//   //   }
//   // };

//   ///end of randomizer

//   // fetch data from API EndPoint

//   //fetch data from API fro carousel

//   // trailer
//   const [toggler, setToggler] = useState(false);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   // const handleLinkClick = (url) => {
//   //   setTrailerUrl(url);
//   //   setToggler(!toggler);
//   // };

//   // const [randomMovie, setRandomMovie] = useState(null);
//   const [movies, setMovies] = useState([]);
//   console.log(movies)

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(
//         "https://dashboard.ucqire.com/api/movie-carousel"
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setMovies(data); // Assuming data is an array of movie objects
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // fetch data from API for movies sliders

//   const [lastAddedSliderData, setLastAddedSliderData] = useState([]);
//   const [lastAddedSeriesSliderData, setLastAddedSeriesSliderData] = useState(
//     []
//   );
//   const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);

//   useEffect(() => {
//     // Fetch data for the last added slider
//     fetch(
//       "https://dashboard.ucqire.com/api/axal_damatebli_serialebi" // drama
//     )
//       .then((response) => response.json())
//       .then((data) => setLastAddedSeriesSliderData(data))
//       .catch((error) =>
//         console.error("Error fetching data for second slider:", error)
//       );
//   }, []);

//   useEffect(() => {
//     // Fetch data for the last added slider
//     fetch(
//       "https://dashboard.ucqire.com/api/axal-damatebulebi" // drama
//     )
//       .then((response) => response.json())
//       .then((data) => setLastAddedSliderData(data))
//       .catch((error) =>
//         console.error("Error fetching data for second slider:", error)
//       );
//   }, []);

//   useEffect(() => {
//     // Fetch data for the upcoming slider
//     fetch(
//       "https://dashboard.ucqire.com/api/upcoming_movies" // drama
//     )
//       .then((response) => response.json())
//       .then((data) => setUpcomingMoviesData(data))
//       .catch((error) =>
//         console.error("Error fetching data for second slider:", error)
//       );
//   }, []);

//   // const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   // const [toggler1, setToggler1] = useState(false);
//   // const [toggler, setToggler] = useState(false);
//   // const [toggler3, setToggler3] = useState(false);

//   const animationInit = () => {
//     if (
//       document.querySelector(".swiper-container .swiper-slide-active") !== null
//     ) {
//       const gsapElem = document
//         .querySelector(".swiper-container .swiper-slide-active")
//         .querySelectorAll('[data-iq-gsap="onStart"]');

//       Array.from(gsapElem, (elem) => {
//         return gsapAnimate.onStartEnd(elem);
//       });
//     }
//   };

//   const options1 = [
//     { value: "season 1", label: "Season 1" },
//     { value: "season 2", label: "Season 2" },
//     { value: "season 3", label: "Season 3" },
//   ];

//   const options2 = [
//     { value: "season 1", label: "Season 1" },
//     { value: "season 2", label: "Season 2" },
//   ];

//   const parseStringToArray = (str) => {
//     return str
//       .slice(1, -1)
//       .split(",")
//       .map((item) => item.trim().replace(/^'|'$/g, ""));
//   };

//   return (
//     <>
//       <FsLightbox
//         toggler={toggler}
//         sources={[
//           <iframe
//             src={trailerUrl}
//             title=" "
//             width="500px"
//             height="200px"
//             frameBorder="1"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//           />,
//         ]}
//       />
//       {/* <FsLightbox
//         toggler={toggler3}
//         sources={[
//           <iframe
//             src={icon}
//             title=" "
//             width="500px"
//             height="200px"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//           />,
//         ]}
//       /> */}
//       <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
//         <div id="prev5" className="swiper-button swiper-button-prev">
//           <i className="fa fa-chevron-left"></i>
//         </div>
//         <div id="next5" className="swiper-button swiper-button-next">
//           <i className="fa fa-chevron-right"></i>
//         </div>
//         <Swiper
//           navigation={{
//             prevEl: "#prev5",
//             nextEl: "#next5",
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           onInit={() => {
//             animationInit();
//           }}
//           onSlideChangeTransitionStart={() => animationInit()}
//           loop={true}
//           id="home-slider"
//           className="slider m-0 p-0"
//         >
//           {movies.map((movie, index) => (
//             <SwiperSlide
//               key={index}
//               className="slide slick-bg s-bg-1"
//               style={{
//                 backgroundImage: `url(${movie.movie_carousel_banner_url})`,
//               }}
//             >
//               <Container fluid className="position-relative h-100">
//                 <div className="slider-inner h-100">
//                   <Row className="align-items-center  iq-ltr-direction h-100 ">
//                     <Col xl="6" lg="12" md="12">
//                       <Link to="#">
//                         <div className="channel-logo" data-iq-delay="0.5">
//                           <img src={logo} className="c-logo" alt="streamit" />
//                         </div>
//                       </Link>
//                       <h1
//                         className="slider-text big-title title text-uppercase"
//                         data-iq-gsap="onStart"
//                         data-iq-position-x="-200"
//                       >
//                         {movie.movie_carousel_title}
//                       </h1>
//                       <div className="d-flex flex-wrap align-items-center">
//                         <div
//                           className="slider-ratting d-flex align-items-center mt-2 mt-md-3"
//                           data-iq-gsap="onStart"
//                           data-iq-position-x="-200"
//                           data-iq-delay="-0.5"
//                         >
//                           {/* <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
//                             <li>
//                               <i className="fa fa-star" aria-hidden="true"></i>
//                             </li>
//                             <li>
//                               <i className="fa fa-star" aria-hidden="true"></i>
//                             </li>
//                             <li>
//                               <i className="fa fa-star" aria-hidden="true"></i>
//                             </li>
//                             <li>
//                               <i className="fa fa-star" aria-hidden="true"></i>
//                             </li>
//                             <li>
//                               <i
//                                 className="fa fa-star-half"
//                                 aria-hidden="true"
//                               ></i>
//                             </li>
//                           </ul> */}
//                           {/* <span className="text-white ml-2">
//                             {movie.movie_carousel_imdb}
//                           </span> */}
//                         </div>
//                         <div
//                           className="d-flex align-items-center mt-2 mt-md-3"
//                           data-iq-gsap="onStart"
//                           data-iq-position-x="-200"
//                           data-iq-delay="-0.5"
//                         >
//                           <span
//                             data-iq-gsap="onStart"
//                             data-iq-position-x="-200"
//                             className="badge imdb-rating badge-secondary p-2"
//                           >
//                             IMDB: {movie.movie_carousel_imdb}
//                           </span>{" "}
//                           {/* aq cava IMDB rating */}
//                           {/* <span className="ml-3">2 Seasons</span>  es carieli ar davtovo tore revs ragacas! */}
//                         </div>
//                         {/* <p
//                           data-iq-gsap="onStart"
//                           data-iq-position-y="80"
//                           data-iq-delay="0.8"
//                         >
//                           {movie.movie_carousel_agwera}
//                         </p> */}
//                       </div>
//                       <div
//                         className="trending-list"
//                         data-wp_object-in="fadeInUp"
//                         data-delay-in="1.2"
//                       >
//                         {/* <div className="text-primary title starring">
//                           მსახიობები:{" "}
//                           <span className="text-body">{movie.msaxiobebi}</span>
//                         </div> */}
//                         <p
//                           data-iq-gsap="onStart"
//                           data-iq-position-y="80"
//                           data-iq-delay="0.8"
//                         >
//                           {movie.movie_carousel_agwera}...
//                         </p>
//                         <div
//                           className="text-primary title genres"
//                           data-iq-gsap="onStart"
//                           data-iq-position-y="80"
//                           data-iq-delay="0.8"
//                         >
//                           ჟანრი:{" "}
//                           <span className="text-body">
//                             {parseStringToArray(movie.janri).join(", ")}
//                           </span>
//                         </div>
//                         {/* <div className="text-primary title tag">
//                           Tag:{" "}
//                           <span className="text-body">
//                             Action, Adventure, Horror
//                           </span>
//                         </div> */}
//                       </div>
//                       <div
//                         className="d-flex align-items-center r-mb-23"
//                         data-iq-gsap="onStart"
//                         data-iq-position-y="80"
//                         data-iq-delay="0.8"
//                       >
//                         <Link to={`/movies/${movie.id}`} className="btn btn-hover iq-button">
//                           <i className="fa fa-play mr-2" aria-hidden="true"></i>
//                           Play Now
//                         </Link>
//                         <span className="more-info" onClick={() => handleMovieClick(movie)}>More Info</span>
//                         {/* <Link to="/show-details" className="btn btn-link">
//                           More details
//                         </Link> */}
//                       </div>
//                     </Col>
//                     <Col
//                       xl="5"
//                       lg="12"
//                       md="12"
//                       className="trailor-video text-center"
//                     >
//                       <Link
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setTrailerUrl(movie.trailer);
//                         }}
//                         to="/"
//                         className="video-open playbtn"
//                       >
//                         <svg
//                           version="1.1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                           x="0px"
//                           y="0px"
//                           width="80px"
//                           height="80px"
//                           viewBox="0 0 213.7 213.7"
//                           enableBackground="new 0 0 213.7 213.7"
//                           xmlSpace="preserve"
//                         >
//                           <polygon
//                             className="triangle"
//                             fill="none"
//                             strokeWidth="7"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeMiterlimit="10"
//                             points="73.5,62.5 148.5,105.8 73.5,149.1 "
//                           />
//                           <circle
//                             className="circle"
//                             fill="none"
//                             strokeWidth="7"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeMiterlimit="10"
//                             cx="106.8"
//                             cy="106.8"
//                             r="103.3"
//                           />
//                         </svg>
//                         <span className="w-trailor">Watch Trailer</span>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </div>
//               </Container>
//             </SwiperSlide>
//           ))}

//           {/* <SwiperSlide className="slide slick-bg s-bg-2">
//             <Container fluid className="position-relative h-100">
//               <div className="slider-inner h-100">
//                 <Row className="row align-items-center  h-100 iq-ltr-direction">
//                   <Col xl="6" lg="12" md="12">
//                     <Link to="#">
//                       <div className="channel-logo">
//                         <img src={logo} className="c-logo" alt="streamit" />
//                       </div>
//                     </Link>
//                     <h1
//                       className="slider-text big-title title text-uppercase"
//                       data-iq-gsap="onStart"
//                       data-iq-position-x="-200"
//                     >
//                       sail coaster
//                     </h1>
//                     <div className="d-flex flex-wrap align-items-center animated">
//                       <div
//                         className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
//                         data-iq-gsap="onStart"
//                         data-iq-position-x="-200"
//                         data-iq-delay="-0.5"
//                       >
//                         <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i
//                               className="fa fa-star-half"
//                               aria-hidden="true"
//                             ></i>
//                           </li>
//                         </ul>
//                         <span className="text-white ml-2">4.7(lmdb)</span>
//                       </div>
//                       <div
//                         className="d-flex align-items-center mt-2 mt-md-3"
//                         data-iq-gsap="onStart"
//                         data-iq-position-x="-200"
//                         data-iq-delay="-0.5"
//                       >
//                         <span className="badge badge-secondary p-2">16+</span>
//                         <span className="ml-3">2h 40m</span>
//                       </div>
//                     </div>
//                     <p
//                       data-iq-gsap="onStart"
//                       data-iq-position-y="80"
//                       data-iq-delay="0.8"
//                     >
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s.
//                     </p>
//                     <div
//                       className="trending-list"
//                       data-wp_object-in="fadeInUp"
//                       data-delay-in="1.2"
//                     >
//                       <div className="text-primary title starring">
//                         Starring:{" "}
//                         <span className="text-body">
//                           Karen Gilchrist, James Earl Jones
//                         </span>
//                       </div>
//                       <div className="text-primary title genres">
//                         Genres: <span className="text-body">Action</span>
//                       </div>
//                       <div className="text-primary title tag">
//                         Tag:{" "}
//                         <span className="text-body">
//                           Action, Adventure, Horror
//                         </span>
//                       </div>
//                     </div>
//                     <div
//                       className="d-flex align-items-center r-mb-23"
//                       data-iq-gsap="onStart"
//                       data-iq-position-y="80"
//                       data-iq-delay="0.8"
//                     >
//                       <Link
//                         to="/show-details"
//                         className="btn btn-hover iq-button"
//                       >
//                         <i className="fa fa-play mr-2" aria-hidden="true"></i>
//                         Play Now
//                       </Link>
//                       <Link to="/show-details" className="btn btn-link">
//                         More details
//                       </Link>
//                     </div>
//                   </Col>
//                   <div className="col-xl-5 col-lg-12 col-md-12 trailor-video  text-center">
//                     <Link
//                       onClick={() => setToggler2(!toggler2)}
//                       to="/"
//                       className="video-open playbtn"
//                     >
//                       <svg
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                         x="0px"
//                         y="0px"
//                         width="80px"
//                         height="80px"
//                         viewBox="0 0 213.7 213.7"
//                         enableBackground="new 0 0 213.7 213.7"
//                         xmlSpace="preserve"
//                       >
//                         <polygon
//                           className="triangle"
//                           fill="none"
//                           strokeWidth="7"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeMiterlimit="10"
//                           points="73.5,62.5 148.5,105.8 73.5,149.1 "
//                         />
//                         <circle
//                           className="circle"
//                           fill="none"
//                           strokeWidth="7"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeMiterlimit="10"
//                           cx="106.8"
//                           cy="106.8"
//                           r="103.3"
//                         />
//                       </svg>
//                       <span className="w-trailor">Watch Trailer</span>
//                     </Link>
//                   </div>
//                 </Row>
//               </div>
//             </Container>
//           </SwiperSlide>
//           <SwiperSlide className="slide slick-bg s-bg-3">
//             <Container fluid className="position-relative h-100">
//               <div className="slider-inner h-100">
//                 <Row className="align-items-center  h-100 iq-ltr-direction">
//                   <Col xl="6" lg="12" md="12">
//                     <Link to="#">
//                       <div className="channel-logo">
//                         <img src={logo} className="c-logo" alt="streamit" />
//                       </div>
//                     </Link>
//                     <h1
//                       className="slider-text big-title title text-uppercase"
//                       data-iq-gsap="onStart"
//                       data-iq-position-x="-200"
//                     >
//                       the army
//                     </h1>
//                     <div className="d-flex flex-wrap align-items-center">
//                       <div
//                         className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
//                         data-iq-gsap="onStart"
//                         data-iq-position-x="-200"
//                         data-iq-delay="-0.5"
//                       >
//                         <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i className="fa fa-star" aria-hidden="true"></i>
//                           </li>
//                           <li>
//                             <i
//                               className="fa fa-star-half"
//                               aria-hidden="true"
//                             ></i>
//                           </li>
//                         </ul>
//                         <span className="text-white ml-2">4.7(lmdb)</span>
//                       </div>
//                       <div
//                         className="d-flex align-items-center mt-2 mt-md-3"
//                         data-iq-gsap="onStart"
//                         data-iq-position-x="-200"
//                         data-iq-delay="-0.5"
//                       >
//                         <span className="badge badge-secondary p-2">20+</span>
//                         <span className="ml-3">3h</span>
//                       </div>
//                     </div>
//                     <p
//                       data-iq-gsap="onStart"
//                       data-iq-position-y="80"
//                       data-iq-delay="0.8"
//                     >
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s.
//                     </p>
//                     <div
//                       className="trending-list"
//                       data-wp_object-in="fadeInUp"
//                       data-delay-in="1.2"
//                     >
//                       <div className="text-primary title starring">
//                         Starring:{" "}
//                         <span className="text-body">
//                           Karen Gilchrist, James Earl Jones
//                         </span>
//                       </div>
//                       <div className="text-primary title genres">
//                         Genres: <span className="text-body">Action</span>
//                       </div>
//                       <div className="text-primary title tag">
//                         Tag:{" "}
//                         <span className="text-body">
//                           Action, Adventure, Horror
//                         </span>
//                       </div>
//                     </div>
//                     <div
//                       className="d-flex align-items-center r-mb-23"
//                       data-iq-gsap="onStart"
//                       data-iq-position-y="80"
//                       data-iq-delay="0.8"
//                     >
//                       <Link
//                         to="/show-details"
//                         className="btn btn-hover iq-button"
//                       >
//                         <i className="fa fa-play mr-2" aria-hidden="true"></i>
//                         Play Now
//                       </Link>
//                       <Link to="/show-details" className="btn btn-link">
//                         More details
//                       </Link>
//                     </div>
//                   </Col>
//                   <Col
//                     xl="5"
//                     lg="12"
//                     md="12"
//                     className="trailor-video  text-center"
//                   >
//                     <Link
//                       onClick={() => setToggler3(!toggler3)}
//                       to="/"
//                       className="video-open playbtn"
//                     >
//                       <svg
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                         x="0px"
//                         y="0px"
//                         width="80px"
//                         height="80px"
//                         viewBox="0 0 213.7 213.7"
//                         enableBackground="new 0 0 213.7 213.7"
//                         xmlSpace="preserve"
//                       >
//                         <polygon
//                           className="triangle"
//                           fill="none"
//                           strokeWidth="7"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeMiterlimit="10"
//                           points="73.5,62.5 148.5,105.8 73.5,149.1 "
//                         />
//                         <circle
//                           className="circle"
//                           fill="none"
//                           strokeWidth="7"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeMiterlimit="10"
//                           cx="106.8"
//                           cy="106.8"
//                           r="103.3"
//                         />
//                       </svg>
//                       <span className="w-trailor">Watch Trailer</span>
//                     </Link>
//                   </Col>
//                 </Row>
//               </div>
//             </Container>
//           </SwiperSlide>  */}
//         </Swiper>
//       </section>

//       {/* latest movies */}
//       <div className="main-content">
//         <section id="iq-favorites">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">ბოლოს დამატებული ფილმები</h4>
//                 </div>
//                 <div id="favorites-contens">
//                   <div id="prev1" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="next1" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>

//                   <div>
//                     <Slide type={"movie"} data={lastAddedSliderData} next={1} />
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         <section id="iq-favorites">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">ბოლოს დამატებული სერიალები</h4>
//                 </div>
//                 <div id="favorites-contens">
//                   <div id="prev2" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="next2" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>

//                   <div>
//                     <Slide data={lastAddedSeriesSliderData} next={2} />
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         <section id="iq-favorites">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">მალე დაემატება</h4>
//                 </div>
//                 <div id="favorites-contens">
//                   <div id="prev1" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="next1" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>

//                   <div>
//                     <UpcomingSlide
//                       data={upcomingMoviesData}
//                     />
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* <section id="iq-favorites">

//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">Latest Movies</h4>
//                   <Link className="iq-view-all" to="/movie-category">
//                     View All
//                   </Link>
//                 </div>
//                 <div id="favorites-contens">
//                   <div id="prev" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="next" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>
//                   <Swiper
//                     navigation={{
//                       prevEl: "#prev",
//                       nextEl: "#next",
//                     }}
//                     breakpoints={{
//                       320: { slidesPerView: 1 },
//                       550: { slidesPerView: 2 },
//                       991: { slidesPerView: 3 },
//                       1400: { slidesPerView: 4 },
//                     }}
//                     loop={true}
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     as="ul"
//                     className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <div className=" block-images position-relative">
//                         <div className="img-box">
//                           <img src={fav1} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Sand Dust</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               13+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={fav2} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Last Race</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               7+
//                             </div>
//                             <span className="text-white">2 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={fav3} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Boop Bitty</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               15+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={fav4} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Dino Land</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               18+
//                             </div>
//                             <span className="text-white">3 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={fav5} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Jaction action</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               10+
//                             </div>
//                             <span className="text-white">1 Season</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   </Swiper>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section> */}
//         {/* upcoming movies */}
//         {/* <section id="iq-upcoming-movie">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between mt-3">
//                   <h4 className="main-title">Upcoming Movies</h4>
//                   <Link className="iq-view-all" to="/movie-category">
//                     View All
//                   </Link>
//                 </div>
//                 <div id="upcoming-contens">
//                   <div id="prev1" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="next1" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>
//                   <Swiper
//                     breakpoints={{
//                       320: { slidesPerView: 1 },
//                       550: { slidesPerView: 2 },
//                       991: { slidesPerView: 3 },
//                       1400: { slidesPerView: 4 },
//                     }}
//                     navigation={{
//                       prevEl: "#prev1",
//                       nextEl: "#next1",
//                     }}
//                     loop={true}
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     as="ul"
//                     className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <div className=" block-images position-relative">
//                         <div className="img-box">
//                           <img src={upcoming1} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">The Last Breath</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               5+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={upcoming2} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Shadow</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               22+
//                             </div>
//                             <span className="text-white">2h 15m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={upcoming3} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             {" "}
//                             <Link to="/show-details">Another Danger</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               25+
//                             </div>
//                             <span className="text-white">3h</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={upcoming4} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">1980</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               11+
//                             </div>
//                             <span className="text-white">2h 45m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={upcoming5} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Vugotronic</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               9+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   </Swiper>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section> */}
//         {/* <section id="iq-suggestede" className="s-margin">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">Suggested For You</h4>
//                   <Link className="iq-view-all" to="/movie-category">
//                     View All
//                   </Link>
//                 </div>
//                 <div id="suggestede-contens">
//                   <div id="prev2" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="prev2" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>
//                   <Swiper
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     navigation={{
//                       prevEl: "#prev2",
//                       nextEl: "#next2",
//                     }}
//                     breakpoints={{
//                       320: { slidesPerView: 1 },
//                       550: { slidesPerView: 2 },
//                       991: { slidesPerView: 3 },
//                       1400: { slidesPerView: 4 },
//                     }}
//                     loop={true}
//                     as="ul"
//                     className="list-inline favorites-slider row p-0 m-0 iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <div className=" block-images position-relative">
//                         <div className="img-box">
//                           <img src={suggested1} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Inside the Sea</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               11+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={suggested2} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Jumbo Queen</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               9+
//                             </div>
//                             <span className="text-white">2 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={suggested3} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Unknown Land</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               17+
//                             </div>
//                             <span className="text-white">2h 30m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={suggested4} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Friends</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               14+
//                             </div>
//                             <span className="text-white">10 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img src={suggested5} className="img-fluid" alt="" />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Blood Block</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               13+
//                             </div>
//                             <span className="text-white">2h 40m</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   </Swiper>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section> */}
//         {/* Randomizer
//         <section id="parallex" className="parallax-window">
//           <Container fluid className="h-100">
//             <Row className="align-items-center justify-content-center h-100 parallaxt-details">
//               <Col lg="4" className="r-mb-23">
//                 <div className="text-left"> */}
//         {/* <Link to="#">
//                     <img src={parallax4} className="img-fluid" alt="bailey" />
//                   </Link> */}

//         {/* <div className="col-6">
//       <label htmlFor="genre">Genre:</label>
//       <select
//         id="genre"
//         className="form-control"
//         value={selectedGenre}
//         onChange={handleGenreChange}
//       >
//         <option value="">Select Genre</option>
//         {genres.map((genre) => (
//           <option key={genre} value={genre}>
//             {genre}
//           </option>
//         ))}
//       </select>
//       <Button variant="outline-info" onClick={fetchIdsByGenre}>
//         Randomize
//       </Button>
//       </div>
//                   <div className="parallax-ratting d-flex align-items-center mt-3 mb-3">
//                     <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
//                       <li>
//                         <Link to="#" className="text-primary">
//                           <i className="fa fa-star" aria-hidden="true"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#" className="pl-2 text-primary">
//                           <i className="fa fa-star" aria-hidden="true"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#" className="pl-2 text-primary">
//                           <i className="fa fa-star" aria-hidden="true"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#" className="pl-2 text-primary">
//                           <i className="fa fa-star" aria-hidden="true"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#" className="pl-2 text-primary">
//                           <i
//                             className="fa fa-star-half-o"
//                             aria-hidden="true"
//                           ></i>
//                         </Link>
//                       </li>
//                     </ul>
//                     <span className="text-white ml-3"></span>
//                   </div>
//                   <div className="movie-time d-flex align-items-center mb-3 iq-ltr-direction">
//                     <div className="badge badge-secondary mr-3">13+</div>
//                     <h6 className="text-white">2h 30m</h6>
//                   </div>
//                   <p>asdfasdfsdfsd</p>
//                   <div className="parallax-buttons">
//                     <Link to="/movie-details" className="btn btn-hover">
//                       Play Now
//                     </Link>
//                     <Link to="/movie-details" className="btn btn-link">
//                       More details
//                     </Link>
//                   </div>
//                 </div>
//               </Col>
//               <Col lg="2">
//                 <div className="parallax-img">
//                   <Link to="/movie-details">
//                     <img
//                       src={parallax3}
//                       className="img-fluid w-100"
//                       alt="bailey"
//                     />
//                   </Link>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section> */}
//         <section id="iq-trending" className="s-margin">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">Trending</h4>
//                 </div>

//                   <TrendingSlide />
//                   {/* <Swiper
//                     as="ul"
//                     thumbs={{ swiper: thumbsSwiper }}
//                     centeredSlides={true}
//                     centeredSlidesBounds={true}
//                     navigation={{
//                       prevEl: "#prev4",
//                       nextEl: "#next4",
//                     }}
//                     slidesPerView={5}
//                     spaceBetween={20}
//                     breakpoints={{
//                       320: { slidesPerView: 1 },
//                       550: { slidesPerView: 2 },
//                       991: { slidesPerView: 3 },
//                       1400: { slidesPerView: 4 },
//                       1500: { slidesPerView: 5 },
//                     }}
//                     loop={true}
//                     className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending1} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide> */}
//                     {/* <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending2} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide> */}
//                     {/* <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending3} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide> */}
//                     {/* <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending4} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending5} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <Link to="#">
//                         <div className="movie-slick position-relative">
//                           <img src={trending6} className="img-fluid" alt="" />
//                         </div>
//                       </Link>
//                     </SwiperSlide> */}
//                   {/* </Swiper> */}
//                 {/* </div> */}
//                 {/* <div>
//                   <Swiper
//                     onSwiper={setThumbsSwiper}
//                     slidesPerView={1}
//                     freeMode={true}
//                     watchSlidesProgress={true}
//                     id="trending-slider"
//                     className="mt-3  list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending1})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data1"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative iq-ltr-direction">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills nav-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                             >
//                               <Nav.Item as="li" className="nav-item">
//                                 <Nav.Link href="" eventKey="trending-data1">
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li" className="nav-item">
//                                 <Nav.Link href="" eventKey="trending-data2">
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li" className="nav-item">
//                                 <Nav.Link href="" eventKey="trending-data3">
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li" className="nav-item">
//                                 <Nav.Link href="" eventKey="trending-data4">
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data1"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the hero camp
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     18+
//                                   </span>
//                                   <span className="ml-3">3 Seasons</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #2 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="/show-details"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data2"
//                               className="overlay-tab  fade show "
//                               id="trending-episode1"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the hero camp
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options1} id="f2" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev11"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="fa fa-chevron-left"></i>
//                                   </div>
//                                   <div
//                                     id="next11"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="fa fa-chevron-right"></i>
//                                   </div>
//                                   <Swiper
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev11",
//                                       nextEl: "#next11",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body ">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body ">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data3"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the hero camp
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev12"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="fa fa-chevron-left"></i>
//                                   </div>
//                                   <div
//                                     id="next12"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="fa fa-chevron-right"></i>
//                                   </div>
//                                   <Swiper
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev12",
//                                       nextEl: "#next12",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data4"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the hero camp
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev13"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next13"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev13",
//                                       nextEl: "#next13",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide> */}
//                     {/* <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending2})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data5"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                             >
//                               <Nav.Item as="li">
//                                 <Nav.Link
//                                   eventKey="trending-data5"
//                                   aria-selected="true"
//                                 >
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li">
//                                 <Nav.Link
//                                   eventKey="trending-data6"
//                                   aria-selected="true"
//                                 >
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li">
//                                 <Nav.Link
//                                   eventKey="trending-data7"
//                                   aria-selected="true"
//                                 >
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li">
//                                 <Nav.Link
//                                   eventKey="trending-data8"
//                                   aria-selected="true"
//                                 >
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data5"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   The Appartment
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     15+
//                                   </span>
//                                   <span className="ml-3">2 Seasons</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #2 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data6"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   The Appartment
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options2} id="f3" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev14"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next14"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev14",
//                                       nextEl: "#next14",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>

//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data7"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   The Appartment
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev15"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next15"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev15",
//                                       nextEl: "#next15",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data8"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   The Appartment
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev16"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next16"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev16",
//                                       nextEl: "#next16",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link to="#" tabIndex="0">
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending3})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data9"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                               role="tablist"
//                             >
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data9"
//                                   aria-selected="true"
//                                 >
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data10"
//                                   aria-selected="true"
//                                 >
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data11"
//                                   aria-selected="true"
//                                 >
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data12"
//                                   aria-selected="true"
//                                 >
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data9"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase ">
//                                   the marshal king
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     11+
//                                   </span>
//                                   <span className="ml-3">3 Seasons</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #11 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>
//                                       My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data10"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the marshal king
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options1} id="f4" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev17"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next17"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev17",
//                                       nextEl: "#next17",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data11"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the marshal king
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev18"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next18"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev18",
//                                       nextEl: "#next18",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="#"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data12"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   the marshal king
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev19"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next19"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev19",
//                                       nextEl: "#next19",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending4})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data13"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                             >
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data13"
//                                   aria-selected="true"
//                                 >
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data14"
//                                   aria-selected="true"
//                                 >
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data15"
//                                   aria-selected="true"
//                                 >
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data16"
//                                   aria-selected="true"
//                                 >
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data13"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase ">
//                                   Dark Zone
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     17+
//                                   </span>
//                                   <span className="ml-3">1 Season</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #2 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data14"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Dark Zone
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options2} id="f5" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev20"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next20"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev20",
//                                       nextEl: "#next20",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data15"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Dark Zone
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev21"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next21"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev21",
//                                       nextEl: "#next21",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data16"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Dark Zone
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev22"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next22"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev22",
//                                       nextEl: "#next22",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link to="#" tabIndex="0">
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending5})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data17"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                             >
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data17"
//                                   aria-selected="true"
//                                 >
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data18"
//                                   aria-selected="true"
//                                 >
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data19"
//                                   aria-selected="true"
//                                 >
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data20"
//                                   aria-selected="true"
//                                 >
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data17"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Opposites Attract
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     7+
//                                   </span>
//                                   <span className="ml-3">2 Seasons</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #2 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>
//                                       My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data18"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Opposites Attract
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options2} id="f6" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev23"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next23"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev23",
//                                       nextEl: "#next23",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data19"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Opposites Attract
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev24"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next24"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev24",
//                                       nextEl: "#next24",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data20"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Opposites Attract
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev24"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next24"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       pevEl: "#prev24",
//                                       nextEl: "#next24",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div
//                         className="tranding-block position-relative"
//                         style={{ backgroundImage: `url(${trending6})` }}
//                       >
//                         <Tab.Container
//                           defaultActiveKey="trending-data21"
//                           className="trending-custom-tab"
//                         >
//                           <div className="tab-title-info position-relative">
//                             <Nav
//                               as="ul"
//                               variant="pills"
//                               className="trending-pills d-flex justify-content-center align-items-center text-center iq-ltr-direction"
//                             >
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data21"
//                                   aria-selected="true"
//                                 >
//                                   Overview
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data22"
//                                   aria-selected="true"
//                                 >
//                                   Episodes
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data23"
//                                   aria-selected="true"
//                                 >
//                                   Trailers
//                                 </Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item>
//                                 <Nav.Link
//                                   eventKey="trending-data24"
//                                   aria-selected="true"
//                                 >
//                                   Similar Like This
//                                 </Nav.Link>
//                               </Nav.Item>
//                             </Nav>
//                           </div>
//                           <Tab.Content className="trending-content">
//                             <Tab.Pane
//                               eventKey="trending-data21"
//                               className="overlay-tab fade show"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="res-logo">
//                                     <div className="channel-logo">
//                                       <img
//                                         src={logo}
//                                         className="c-logo"
//                                         alt="streamit"
//                                       />
//                                     </div>
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Fire Storm
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail">
//                                   <span className="badge badge-secondary p-3">
//                                     17+
//                                   </span>
//                                   <span className="ml-3">2 Seasons</span>
//                                   <span className="trending-year">2020</span>
//                                 </div>
//                                 <div className="d-flex align-items-center series mb-4">
//                                   <Link to="#">
//                                     <img
//                                       src={trendinglabel}
//                                       className="img-fluid"
//                                       alt=""
//                                     />
//                                   </Link>
//                                   <span className="text-gold ml-3">
//                                     #2 in Series Today
//                                   </span>
//                                 </div>
//                                 <p className="trending-dec">
//                                   Lorem Ipsum is simply dummy text of the
//                                   printing and typesetting industry. Lorem Ipsum
//                                   has been the industry's standard dummy text
//                                   ever since the 1500s.
//                                 </p>
//                                 <div className="p-btns">
//                                   <div className="d-flex align-items-center p-0">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-hover mr-2"
//                                       tabIndex="0"
//                                     >
//                                       <i
//                                         className="fa fa-play mr-2"
//                                         aria-hidden="true"
//                                       ></i>
//                                       Play Now
//                                     </Link>
//                                     <Link
//                                       to="#"
//                                       className="btn btn-link"
//                                       tabIndex="0"
//                                     >
//                                       <i className="ri-add-line"></i>My List
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <div className="trending-list mt-4">
//                                   <div className="text-primary title">
//                                     Starring:
//                                     <span className="text-body">
//                                       Wagner Moura, Boyd Holbrook, Joanna
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     Genres:
//                                     <span className="text-body">
//                                       Crime, Action, Thriller, Biography
//                                     </span>
//                                   </div>
//                                   <div className="text-primary title">
//                                     This Is:
//                                     <span className="text-body">
//                                       Violent, Forceful
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data22"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Fire Storm
//                                 </h1>
//                                 <div className="d-flex align-items-center text-white text-detail mb-4">
//                                   <span className="season_date ml-2">
//                                     2 Seasons
//                                   </span>
//                                   <span className="trending-year">
//                                     Feb 2019
//                                   </span>
//                                 </div>
//                                 <div className="iq-custom-select d-inline-block sea-epi">
//                                   <Select options={options1} id="f7" />
//                                 </div>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode1"
//                                 >
//                                   <div
//                                     id="prev25"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next25"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev25",
//                                       nextEl: "#next25",
//                                     }}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data23"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Fire Storm
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode2"
//                                 >
//                                   <div
//                                     id="prev26"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next26"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     navigation={{
//                                       prevEl: "#prev26",
//                                       nextEl: "#next26",
//                                     }}
//                                     loop={true}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     className="list-inline p-0 m-0"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 1
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 2
//                                           </Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 3
//                                           </Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 4
//                                           </Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#" target="_blank">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               target="_blank"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#" target="_blank">
//                                             Trailer 5
//                                           </Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                             <Tab.Pane
//                               eventKey="trending-data24"
//                               className="overlay-tab show fade"
//                             >
//                               <div className="trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
//                                 <Link to="#" tabIndex="0">
//                                   <div className="channel-logo">
//                                     <img
//                                       src={logo}
//                                       className="c-logo"
//                                       alt="stramit"
//                                     />
//                                   </div>
//                                 </Link>
//                                 <h1 className="trending-text big-title text-uppercase">
//                                   Fire Storm
//                                 </h1>
//                                 <div
//                                   className="episodes-contens mt-4"
//                                   id="episode3"
//                                 >
//                                   <div
//                                     id="prev27"
//                                     className="swiper-button swiper-button-prev"
//                                   >
//                                     <i className="ri-arrow-left-s-line"></i>
//                                   </div>
//                                   <div
//                                     id="next27"
//                                     className="swiper-button swiper-button-next"
//                                   >
//                                     <i className="ri-arrow-right-s-line"></i>
//                                   </div>
//                                   <Swiper
//                                     slidesPerView={4}
//                                     spaceBetween={20}
//                                     breakpoints={{
//                                       320: { slidesPerView: 1 },
//                                       550: { slidesPerView: 2 },
//                                       991: { slidesPerView: 3 },
//                                       1400: { slidesPerView: 4 },
//                                     }}
//                                     navigation={{
//                                       prevEl: "#prev27",
//                                       nextEl: "#next27",
//                                     }}
//                                     loop={true}
//                                     className="list-inline p-0 m-0 iq-rtl-direction"
//                                   >
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes1}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link to="#" tabIndex="0">
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 1</Link>
//                                           <span className="text-primary">
//                                             2.25 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes2}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 2</Link>
//                                           <span className="text-primary">
//                                             3.23 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes3}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 3</Link>
//                                           <span className="text-primary">
//                                             2 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes4}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 4</Link>
//                                           <span className="text-primary">
//                                             1.12 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide className="e-item">
//                                       <div className="block-image position-relative">
//                                         <Link to="#">
//                                           <img
//                                             src={episodes5}
//                                             className="img-fluid"
//                                             alt=""
//                                           />
//                                         </Link>
//                                         <div className="episode-play-info">
//                                           <div className="episode-play">
//                                             <Link
//                                               to="/show-details"
//                                               tabIndex="0"
//                                             >
//                                               <i className="ri-play-fill"></i>
//                                             </Link>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="episodes-description text-body">
//                                         <div className="d-flex align-items-center justify-content-between">
//                                           <Link to="#">Episode 5</Link>
//                                           <span className="text-primary">
//                                             2.54 m
//                                           </span>
//                                         </div>
//                                         <p className="mb-0">
//                                           Lorem Ipsum is simply dummy text of
//                                           the printing and typesetting industry.
//                                           Lorem Ipsum has been the industry's
//                                           standard.
//                                         </p>
//                                       </div>
//                                     </SwiperSlide>
//                                   </Swiper>
//                                 </div>
//                               </div>
//                             </Tab.Pane>
//                           </Tab.Content>
//                         </Tab.Container>
//                       </div>
//                     </SwiperSlide> */}
//                   {/* </Swiper>
//                 </div> */}
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* <section id="iq-tvthrillers" className="s-margin mb-5">
//           <Container fluid>
//             <Row>
//               <Col sm="12" className="overflow-hidden">
//                 <div className="d-flex align-items-center justify-content-between">
//                   <h4 className="main-title">Recommended For You</h4>
//                   <Link className="iq-view-all" to="/movie-category">
//                     View All
//                   </Link>
//                 </div>
//                 <div id="tvthrillers-contens">
//                   <div id="prev3" className="swiper-button swiper-button-prev">
//                     <i className="fa fa-chevron-left"></i>
//                   </div>
//                   <div id="prev3" className="swiper-button swiper-button-next">
//                     <i className="fa fa-chevron-right"></i>
//                   </div>
//                   <Swiper
//                     navigation={{
//                       prevEl: "#prev3",
//                       nextEl: "#next3",
//                     }}
//                     breakpoints={{
//                       320: { slidesPerView: 1 },
//                       550: { slidesPerView: 2 },
//                       991: { slidesPerView: 3 },
//                       1400: { slidesPerView: 4 },
//                     }}
//                     loop={true}
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     as="ul"
//                     className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
//                   >
//                     <SwiperSlide as="li">
//                       <div className=" block-images position-relative">
//                         <div className="img-box">
//                           <img
//                             src={tvthrillers1}
//                             className="img-fluid"
//                             alt=""
//                           />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Day of Darkness</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               15+
//                             </div>
//                             <span className="text-white">2 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img
//                             src={tvthrillers2}
//                             className="img-fluid"
//                             alt=""
//                           />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">My True Friends</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               7+
//                             </div>
//                             <span className="text-white">2 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img
//                             src={tvthrillers3}
//                             className="img-fluid"
//                             alt=""
//                           />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Arrival 1999</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               11+
//                             </div>
//                             <span className="text-white">3 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className=" block-images position-relative">
//                         <div className="img-box">
//                           <img
//                             src={tvthrillers4}
//                             className="img-fluid"
//                             alt=""
//                           />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">Night Mare</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               18+
//                             </div>
//                             <span className="text-white">3 Seasons</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide as="li">
//                       <div className="block-images position-relative">
//                         <div className="img-box">
//                           <img
//                             src={tvthrillers5}
//                             className="img-fluid"
//                             alt=""
//                           />
//                         </div>
//                         <div className="block-description">
//                           <h6 className="iq-title">
//                             <Link to="/show-details">The Marshal King</Link>
//                           </h6>
//                           <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
//                             <div className="badge badge-secondary p-1 mr-2">
//                               17+
//                             </div>
//                             <span className="text-white">1 Season</span>
//                           </div>
//                           <div className="hover-buttons">
//                             <Link
//                               to="/show-details"
//                               role="button"
//                               className="btn btn-hover iq-button"
//                             >
//                               <i
//                                 className="fa fa-play mr-1"
//                                 aria-hidden="true"
//                               ></i>
//                               Play Now
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="block-social-info">
//                           <ul className="list-inline p-0 m-0 music-play-lists">
//                             <li className="share">
//                               <span>
//                                 <i className="ri-share-fill"></i>
//                               </span>
//                               <div className="share-box">
//                                 <div className="d-flex align-items-center">
//                                   <Link
//                                     to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-facebook-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="https://twitter.com/intent/tweet?text=Currentlyreading"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="share-ico"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-twitter-fill"></i>
//                                   </Link>
//                                   <Link
//                                     to="#"
//                                     data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
//                                     className="share-ico iq-copy-link"
//                                     tabIndex="0"
//                                   >
//                                     <i className="ri-links-fill"></i>
//                                   </Link>
//                                 </div>
//                               </div>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-heart-fill"></i>
//                               </span>
//                               <span className="count-box">19+</span>
//                             </li>
//                             <li>
//                               <span>
//                                 <i className="ri-add-line"></i>
//                               </span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   </Swiper>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section> */}
//       </div>
//       {selectedMovie && (
//         <MovieData movie={movieData} onClose={handleCloseMovieData} />
//       )}
//     </>
//   );
// };

// export default Homepage;

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
import VideoPlayer from "../pages/player"; // Import VideoPlayer component
import TrendingSection from "./TrendingSlide";

// 


// swiper

// 

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
