// import React, {useState} from "react";
// import FsLightbox from "fslightbox-react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import './slide.css'

// const UpcomingSlide = ({ data, onToggleTrailer  }) => {

//   const [toggler, setToggler] = useState(false);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   console.log(trailerUrl)

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
//         1400: { slidesPerView: 5 },
//         1600: { slidesPerView: 6 },
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

//             <div className="movie-details">
//                 <span className="movieTitle">{movie.title_geo}</span>
//                 <div className="movie-meta">
//                   <div
//                     className="text-primary title genres"
//                     data-iq-gsap="onStart"
//                     data-iq-position-y="80"
//                     data-iq-delay="0.8"
//                   >
//                     <span className="text-body">
//                       {/* {parseStringToArray(movie.janri).join(" ● ")} */}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bottom-meta">
//                   <span className="year">{movie.year}</span>
//                   <span className="imdb-badge imdb-slide">IMDB:{movie.imdb}</span>
//                 </div>
//               </div>

//               <h6 className="iq-title slider-title1">
//                 {/* <Link to={`/show-details/${movie.id}`}>{movie.title_geo}</Link> */}
//               </h6>
//               <div className="movie-time d-flex align-items-center my-2">
//                 <div className="badge badge-secondary p-1 mr-2">
//                   {movie.year}
//                 </div>
//               </div>

//               <div className="hover-buttons">
//                 {/* <Link
//                 //   to={`/show-details/${movie.id}`}
//                 //   role="button"
//                 onToggleTrailer={onToggleTrailer}
//                   className="btn btn-hover"
//                 > */}
//                   <Link
//                         onClick={() => {
//                           console.log(toggler);
//                           setToggler(!toggler);
//                           setTrailerUrl(movie.trailer_link);
//                           console.log(toggler);
//                         }}
//                         to="/"
//                         className="btn btn-hover"
//                       >
//                   <i className="fa fa-play mr-1" aria-hidden="true"></i>
//                   Watch Trailer
//                 </Link>
//               </div>
//             </div>
//             <div className="block-social-info">
//               <ul className="list-inline p-0 m-0 music-play-lists">

//                 <li>
//                   <span>
//                     <i className="ri-heart-fill"></i>
//                   </span>
//                   <span className="count-box">{movie.likes}</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//     </>
//   );
// };

// export default UpcomingSlide;



// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import "./slide.css"; // Assuming you create a separate CSS file for styling
// import MovieData from "../views/backend/movie-data/movie-data";

// const UpcomingSlide = ({ data, next, onPlay }) => {
//   const parseStringToArray = (str) => {
//     const genres = str
//       .slice(1, -1)
//       .split(",")
//       .map((item) => item.trim().replace(/^'|'$/g, ""));
//     genres.sort((a, b) => a.length - b.length);
//     return genres.slice(0, 3);
//   };

//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [movieData, setMovieData] = useState(null);

//   const fetchMovieDataById = async (id) => {
//     try {
//       const response = await fetch(
//         `https://dashboard.ucqire.com/api/by-id-movie?id=${id}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setMovieData(data[0]);
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     }
//   };

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//     fetchMovieDataById(movie.id);
//   };

//   const handleCloseMovieData = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <>
//       <Swiper
//         spaceBetween={10}
//         navigation={{
//           nextEl: `#next${next}`,
//           prevEl: `#prev${next}`,
//         }}
//         loop={true}
//         centeredSlides={true}
//         breakpoints={{
//           320: { slidesPerView: 2, spaceBetween: 10 },
//           550: { slidesPerView: 4 },
//           991: { slidesPerView: 4 },
//           1400: { slidesPerView: 6 },
//           1600: { slidesPerView: 7 },
//         }}
//         className="favorites-slider list-inline row p-0 m-0 iq-rtl-direction"
//       >
//         {data.map((movie, index) => (
//           <SwiperSlide key={index} className="slide-item">
//             <div className="block-images1 block-images position-relative">
//               <div className="img-box">
//                 <img src={movie.poster} className="img-fluid" alt="" />
//               </div>
//               <div className="block-social-info">
//                 <ul className="list-inline p-0 m-0 music-play-lists upcoming-movie-slider-trailer-btn">
//                   <li className="">
//                     <span className="span-trailer">
//                       Trailer
//                       <i className="fa fa-play pl-2" onClick={() => onPlay(movie.id)}></i>
//                     </span>
//                   </li>
//                 </ul>
//                 <ul className="list-inline p-0 m-0 music-play-lists">
//                   <li>
//                     <span>
//                       <i
//                         className="ri-arrow-down-s-line"
//                         onClick={() => handleMovieClick(movie)}
//                       ></i>
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="movie-details">
//                 <span className="movieTitle">{movie.title_eng}</span>
//                 <div className="movie-meta">
//                   <div
//                     className="text-primary title genres"
//                     data-iq-gsap="onStart"
//                     data-iq-position-y="80"
//                     data-iq-delay="0.8"
//                   >
//                     <span className="text-body">
//                       {parseStringToArray(movie.janri).join(" ● ")}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bottom-meta">
//                   <span className="year">{movie.year}</span>
//                   <span className="imdb-badge imdb-slide">
//                     IMDB:{movie.imdb}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {selectedMovie && movieData && (
//         <MovieData 
//           movie={movieData} 
//           onClose={handleCloseMovieData} 
//           onPlay={() => onPlay(movieData.id)} // Pass the onPlay prop
//         />
//       )}
//     </>
//   );
// };

// export default UpcomingSlide;


import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./slide.css"; // Assuming you create a separate CSS file for styling
import MovieData from "../views/backend/movie-data/movie-data";

const UpcomingSlide = ({ data, next }) => {
  const parseStringToArray = (str) => {
    const genres = str
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^'|'$/g, ""));
    genres.sort((a, b) => a.length - b.length);
    return genres.slice(0, 3);
  };

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieData = () => {
    setSelectedMovie(null);
  };

  const handleTrailerClick = (trailerLink) => {
    const embedUrl = trailerLink.replace("watch?v=", "embed/");
    setTrailerUrl(embedUrl);
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          <iframe
            src={trailerUrl}
            title="Trailer"
            width="800px"
            height="450px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />,
        ]}
      />
      <Swiper
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
        {data.map((movie, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div className="block-images1 block-images position-relative">
              <div className="img-box">
                <img src={movie.poster} className="img-fluid" alt="" />
              </div>
              <div className="block-social-info">
                <ul className="list-inline p-0 m-0 music-play-lists upcoming-movie-slider-trailer-btn">
                  <li>
                    <span className="span-trailer">
                      Trailer
                      <i
                        className="fa fa-play pl-2"
                        onClick={() => handleTrailerClick(movie.trailer_link)}
                      ></i>
                    </span>
                  </li>
                </ul>
                <ul className="list-inline p-0 m-0 music-play-lists">
                  <li>
                    <span>
                      <i
                        className="ri-arrow-down-s-line"
                        onClick={() => handleMovieClick(movie)}
                      ></i>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="movie-details">
                <span className="movieTitle">{movie.title_eng}</span>
                <div className="movie-meta">
                  <div
                    className="text-primary title genres"
                    data-iq-gsap="onStart"
                    data-iq-position-y="80"
                    data-iq-delay="0.8"
                  >
                    <span className="text-body">
                      {parseStringToArray(movie.janri).join(" ● ")}
                    </span>
                  </div>
                </div>
                <div className="bottom-meta">
                  <span className="year">{movie.year}</span>
                  <span className="imdb-badge imdb-slide">
                    IMDB:{movie.imdb}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedMovie && (
        <MovieData 
          movie={selectedMovie} 
          onClose={handleCloseMovieData} 
        />
      )}
    </>
  );
};

export default UpcomingSlide;
