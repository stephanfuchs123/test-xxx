import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import { useLocation } from "react-router-dom";

import "./VideoPlayer.css";
import VideoPlayer from "./VideoPlayer";

// import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";

//img
// import episode1 from "../../../assets/images/episodes/01.jpg";
// import episode2 from "../../../assets/images/episodes/02.jpg";
// import episode3 from "../../../assets/images/episodes/03.jpg";
// import episode4 from "../../../assets/images/episodes/04.jpg";
// import episode5 from "../../../assets/images/episodes/05.jpg";
// import episode6 from "../../../assets/images/episodes/06.jpg";
// import episode7 from "../../../assets/images/episodes/07.jpg";
// import episode8 from "../../../assets/images/episodes/08.jpg";
// import episode9 from "../../../assets/images/episodes/09.jpg";
// import episode10 from "../../../assets/images/episodes/10.jpg";
// import video from "../../../assets/video/sample-video.mp4";
// import { data } from "jquery";

const ShowList = (video) => {
   const location = useLocation();
   const [movieId, setMovieId] = useState(null);  // Initialize as null
   const [movieData, setMovieData] = useState([]);
 
   // Extract movieId from URL
   useEffect(() => {
     const pathParts = location.pathname.split("/");
     const movieNum = pathParts[pathParts.length - 1];
     console.log("variable: " + movieNum);
     setMovieId(movieNum);
     console.log("movie Id state: " + movieId);
   }, [location]);
 
   // Fetch movie data when movieId is set
   useEffect(() => {
     if (movieId) {
       fetch(`https://dashboard.ucqire.com/api/by-id-movie?id=${movieId}`)
         .then((response) => response.json())
         .then((data) => setMovieData(data))
         .catch((error) =>
           console.error("Error fetching data for first slider:", error)
         );
     }
   }, [movieId]);  // Add movieId as a dependency
 
   console.log("movie Id state: " + movieId);
   console.log(movieData.url)

  return (
    <>
      {/* <div className="video-container iq-main-slider"> */}
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
      <video className="video d-block" controls loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};
export default ShowList;
