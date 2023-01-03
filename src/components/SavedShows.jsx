import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AiOutlineClose} from "react-icons/ai"

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user.email}`)
  const deleteShow = async (passedID) => {
    try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result,
        });
    } catch (error) {
        console.log(error);
    }
  }

  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-red-600 font-bold md:text-xl px-2 py-1">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 overflow-hidden"
            >
              <p className="text-white">{item?.title}</p>
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center break-words">
                  <button
                    className="bg-red-600 px-1 py-1 rounded"
                    onClick={() => {
                      let trailerURL = "";
                      {
                        item.movie.title
                          ? (trailerURL = `https://api.themoviedb.org/3/movie/${item?.id}/videos?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US`)
                          : (trailerURL = `https://api.themoviedb.org/3/tv/${item?.id}/videos?api_key=2974558603f942cd73ecb0ba9db30e40&language=en-US`);
                      }
                      axios.get(trailerURL).then((response) => {
                        navigate(`/watch/${response.data.results[0].key}`, {
                          state: {
                            movie: item.movie,
                            name: item.title,
                            type: "Movie",
                          },
                        });
                      });
                    }}
                  >
                    Watch Now
                  </button>
                </p>
                <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
