import React, { useState } from "react";
//import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TVShow = ({ item }) => {
  const [like] = useState(false);
 
  const navigate = useNavigate();

  const trailerURL = `https://api.themoviedb.org/3/tv/${item?.id}/videos?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US`;
  console.log(trailerURL);
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
          movie: item,
          type: 'Show',
        }
      }
      );
    });
  };



  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <p className="text-white">{item?.name}</p>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center break-words">
          
          <button className="bg-red-600 px-1 py-1 rounded" onClick={playTrailer}>
            Watch Now
          </button>
        </p>
       
        <p>
          {/* {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )} */}
        </p>
      </div>
    </div>
  );
};

export default TVShow;
