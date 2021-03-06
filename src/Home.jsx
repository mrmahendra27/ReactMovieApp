import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=3fbeac48";

const Home = ({ isLoading, setIsLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const [movieLists, setMovieLists] = useState([]);

  const fetchMovies = async (title) => {
    setIsLoading(true);
    const response = await axios.get(`${API_URL}&s=${title}`);

    setSearchInput("");
    setMovieLists(response.data.Search);
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchMovies(searchInput);
    }
  };

  useEffect(() => {
    fetchMovies("spider");
  }, []);

  return (
    <>
      {isLoading == true ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1>Movie World</h1>

          <div className="search">
            <input
              type="text"
              placeholder="Search for movies.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => fetchMovies(searchInput)}
            />
          </div>

          {movieLists?.length > 0 ? (
            <div className="container">
              {movieLists.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
