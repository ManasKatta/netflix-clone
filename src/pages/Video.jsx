import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Row from "../components/Row";

const Video = ({ movie }) => {
  const vkey = useParams();
  const location = useLocation();
  console.log("hi");
  console.log(location.state.movie);
  console.log(vkey);
  return (
    <>
      <div className="py-20">
        <p className="text-white text-[27px] py-1">You are watching: {location.state.movie.title}</p>
        <div className="relative flex flex-col items-center">
          <iframe
            className="w-screen h-[550px]"
            // width="1000"
            // height="562"
            src={`https://www.youtube.com/embed/${vkey.videoKey}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          
        </div>
        <p className="text-[#F3F6FB] text-[14px] py-2">
            Summary: {location.state.movie.overview}
        </p>
        <Row
          rowID="1"
          title={`Similar Movies To: ${location.state.movie.title}`}
          fetchURL={`https://api.themoviedb.org/3/movie/${location.state.movie.id}/similar?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US&page=1`}
        />
      </div>
    </>
  );
};

export default Video;
