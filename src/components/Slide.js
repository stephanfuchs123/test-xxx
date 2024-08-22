// import React from "react";
// // import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

// const Slide = ({ data }) => {
//   return (
//     <Swiper
//       spaceBetween={20}
//       navigation={{
//         nextEl: "#next1",
//         prevEl: "#prev1",
//       }}
//       loop={true}
//       breakpoints={{
//         320: { slidesPerView: 2 },
//         550: { slidesPerView: 2 },
//         991: { slidesPerView: 3 },
//         1400: { slidesPerView: 6 },
//         1600: { slidesPerView: 7 },
//       }}
//       className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
//     >
//       {data.map((movie, index) => (
//         <SwiperSlide key={index} className="slide-item">
//           <div className="block-images1 block-images position-relative ">
//             <div className="img-box">
//               <img src={movie.poster} className="img-fluid" alt="" />
//             </div>
//             <div className="block-description">
//               <h6 className="iq-title slider-title1">
//                 {/* <Link to={`/show-details/${movie.id}`}>{movie.title_geo}</Link> */}
//               </h6>
//               <div className="movie-time d-flex align-items-center my-2">
//                 {/* <div className="badge badge-secondary p-1 mr-2">
//                   {movie.year}
//                 </div> */}
//               </div>
//               <div className="hover-buttons">
//                 {/* <Link
//                   to={`/show-details/${movie.id}`}
//                   role="button"
//                   className="btn btn-hover"
//                 >
//                   <i className="fa fa-play mr-1" aria-hidden="true"></i>
//                   Play Now
//                 </Link> */}
//               </div>
//             </div>
//             <div className="block-social-info">
//               <ul className="list-inline p-0 m-0 music-play-lists">
//                 <li>
//                   <span>
//                   <i className="ri-arrow-down-s-line"></i>
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="movie-details">
//               <p>{movie.description}</p>
//               <p>Genre: {movie.genre}</p>
//               <p>Rating: {movie.rating}</p>
//               {/* Add more details as needed */}
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slide;
// ---------------

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import "./slide.css";  // Assuming you create a separate CSS file for styling

// const Slide = ({ data }) => {
//   return (
//     <Swiper
//       spaceBetween={20}
//       navigation={{
//         nextEl: "#next1",
//         prevEl: "#prev1",
//       }}
//       loop={true}
//       breakpoints={{
//         320: { slidesPerView: 2 },
//         550: { slidesPerView: 2 },
//         991: { slidesPerView: 3 },
//         1400: { slidesPerView: 6 },
//         1600: { slidesPerView: 7 },
//       }}
//       className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
//     >
//       {data.map((movie, index) => (
//         <SwiperSlide key={index} className="slide-item">
//           <div className="block-images1 block-images position-relative">
//             <div className="img-box">
//               <img src={movie.poster} className="img-fluid" alt="" />
//             </div>
//             <div className="block-description">
//               <div className="movie-time d-flex align-items-center my-2">
//                 {/* <div className="badge badge-secondary p-1 mr-2">
//                   {movie.year}
//                 </div> */}
//               </div>
//             </div>
//             <div className="block-social-info">
//               <ul className="list-inline p-0 m-0 music-play-lists">
//                 <li>
//                   <span>
//                     <i className="ri-arrow-down-s-line"></i>
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="movie-details">
//               <p>{movie.description}</p>
//               <div className="movie-meta">
//                 <p>Genre: {movie.genre}</p>
//                 <p>Rating: {movie.rating}</p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

import React, { useState, useCallback, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./slide.css";
import MovieData from "../views/backend/movie-data/movie-data";
import VideoPlayer from "../views/backend/pages/player";

const Slide = ({ data, next, type }) => {
  const parseStringToArray = (str) => {
    const genres = str
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^'|'$/g, ""));
    genres.sort((a, b) => a.length - b.length);
    return genres.slice(0, 3);
  };

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && data.length) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.slideNext(); // Automatically advance to the next slide
        // swiperInstance.slideTo(2); // Optionally jump to a specific slide
      }
    }
  }, [data]);

  const fetchMovieDataById = useCallback(async (id) => {
    try {
      const response = await fetch(
        `https://dashboard.ucqire.com/api/by-id-${type}?id=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return null;
    }
  }, [type]);

  const handleMovieClick = useCallback(async (movie) => {
    setSelectedMovie(movie);
    const data = await fetchMovieDataById(movie.id);
    if (data) {
      setMovieData(data);
    }
  }, [fetchMovieDataById]);

  const handleCloseMovieData = useCallback(() => {
    setSelectedMovie(null);
    setMovieData(null);
  }, []);

  const handlePlayButtonClick = useCallback(async (id) => {
    const data = await fetchMovieDataById(id);
    if (data && data.url) {
      setVideoUrl(data.url);
      setIsPlaying(true);
      handleCloseMovieData();
    } else {
      console.error("Video URL not found");
    }
  }, [fetchMovieDataById, handleCloseMovieData]);

  const handleClosePlayer = useCallback(() => {
    setIsPlaying(false);
    setVideoUrl("");
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        navigation={{
          nextEl: `#next${next}`,
          prevEl: `#prev${next}`,
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          550: { slidesPerView: 4 },
          991: { slidesPerView: 4 },
          1400: { slidesPerView: 6 },
          1600: { slidesPerView: 7 },
        }}
        className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
      >
        {data.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="slide-item"
            onClick={() => handleMovieClick(movie)}
          >
            <div className="block-images1 block-images position-relative">
              <div className="img-box">
                <img src={movie.poster} className="img-fluid" alt={movie.title_eng} />
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
        ))}
      </Swiper>
      {selectedMovie && movieData && (
        <MovieData
          movie={movieData}
          onClose={handleCloseMovieData}
          onPlay={() => handlePlayButtonClick(movieData.id)}
        />
      )}
      {isPlaying && <VideoPlayer url={videoUrl} onClose={handleClosePlayer} />}
    </>
  );
};

export default Slide;
