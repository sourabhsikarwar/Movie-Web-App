import React, { useState, useEffect } from "react";
import axios from "axios";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Favourites", href: "/favourites" },
// ];

function Banner() {
  const [Movies, setMovies] = useState({});

  useEffect(function () {
    axios
      .get(
        // "https://api.themoviedb.org/3/trending/movie/week?api_key=ebf3974135e4e887c96fc16d0e3024b1"
        // "https://api.themoviedb.org/3/discover/movie?api_key=ebf3974135e4e887c96fc16d0e3024b1&language=en-US"
        "https://api.themoviedb.org/3/discover/movie?api_key=ebf3974135e4e887c96fc16d0e3024b1&with_genres=12"
      )
      .then((res) => {
        const mResults = res.data.results[1];
        setMovies(mResults);
      });
  }, []);

  return (
    <>
      <section className={`text-gray-600 body-font`} style={{
        backgroundImage : `url(https://image.tmdb.org/t/p/original/${Movies.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition:"center"
        }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col md:items-center md:h-[75vh] h-screen">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-100">
              {Movies.title}
            </h1>
            <div className="flex justify-center my-4">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Add to Favourite
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
