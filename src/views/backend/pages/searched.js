// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import MovieCard from "../../../components/MovieCard";
// import "./searched.css"
// import {Col, Row} from "react-bootstrap";


// const Searched = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [swiperData, setSwiperData] = useState([]);
//   const location = useLocation();

// //   const [cardsPerRow, setCardsPerRow] = useState(1);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       const screenWidth = window.innerWidth;
// //       if (screenWidth >= 1600) {
// //         setCardsPerRow(6);
// //       } else if (screenWidth >= 1400) {
// //         setCardsPerRow(5);
// //       } else if (screenWidth >= 991) {
// //         setCardsPerRow(3);
// //       } else if (screenWidth >= 550) {
// //         setCardsPerRow(2);
// //       } else {
// //         setCardsPerRow(1);
// //       }
// //     };

// //     // Add event listener for window resize
// //     window.addEventListener("resize", handleResize);

// //     // Initial call to set cards per row based on current screen width
// //     handleResize();

// //     // Clean up the event listener on component unmount
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const queryParams = new URLSearchParams(location.search);
//         const searchTerm = queryParams.get("query");

//         if (searchTerm) {
//           const searchResponse = await axios.get(
//             `https://dashboard.ucqire.com/api/all-search?param=${searchTerm}`
//           );
//           setSearchResults(searchResponse.data);

//           const swiperResponse = await axios.get(
//             `https://dashboard.ucqire.com/api/movie-carousel`
//           );
//           setSwiperData(swiperResponse.data);

//           console.log("Search Results:", searchResponse.data);
//           console.log("Swiper Data:", swiperResponse.data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [location.search]);



//   // for carousel

//   // const [movies, setMovies] = useState([])

//   // useEffect(() => {
//   //   fetchMovies();
//   // }, []);

//   // const fetchMovies = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       "https://dashboard.ucqire.com/api/movie-carousel"
//   //     );
//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch data");
//   //     }
//   //     const data = await response.json();
//   //     setMovies(data); // Assuming data is an array of movie objects
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   return (
//     <>
      
//       <section className="searched-items">
//         <div className="containerr">
//         <Row className="justify-content-center">
//             {searchResults.map((movie) => (
//               <Col
//               // sm={calculateColumns()}
//               md={2}
//               key={movie.id}
//               className="mb-4 custom-card"
//             >
//                 <MovieCard movie={movie} />
//                 </Col>
//             ))}
//           </Row>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Searched;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MovieCard from "../../../components/MovieCard";
import "./searched.css";
import { Col, Row } from "react-bootstrap";

const Searched = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
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
          );
          setSwiperData(swiperResponse.data);

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
