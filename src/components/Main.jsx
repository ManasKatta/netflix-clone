import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [movies, setMovies] = useState([]);
  //const [trailer, setTrailer] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movie);
  //console.log(movie?.id);
  const navigate = useNavigate();
  const trailerURL = `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US`;
  //console.log(trailerURL);
  const playTrailer = () => {
    axios.get(trailerURL).then((response) => {
      //console.table(response.data.results);
      //console.log("key");
      //console.log(response.data.results[0].key);
      // window.open(
      //   `https://www.youtube.com/watch?v=${response.data.results[0].key}`
      // );
      console.log("hi");
      navigate(`/watch/${response.data.results[0].key}`, {
        state: {
          movie: movie,
          type: 'Movie',
        }
      }
      );
    });
  };

  const cutString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
              onClick={playTrailer}
            >
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Release Date: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {cutString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
