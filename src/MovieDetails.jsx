import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://www.omdbapi.com?apikey=3fbeac48";

const MovieDeatils = ({ isLoading, setIsLoading }) => {
  const [movie, setMovie] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const fetchMovieDetails = async () => {
    setIsLoading(true);
    const movie = await axios.get(`${API_URL}&i=${params.id}`);

    if (movie.data.Response === "False") navigate("/");

    setMovie(movie.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <>
      {isLoading == true ? (
        <div className="loader"></div>
      ) : (
        <div>
          <h1>{movie.Title}</h1>
          <div className="plot">
            <p>{movie.Plot}</p>
          </div>
          <div className="movie-details">
            <div>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movie.Title}
              />
            </div>
            <div>
              <h3>
                <span>Rated:</span> {movie.Rated}
              </h3>
              <h3>
                <span>Country:</span> {movie.Country}
              </h3>
              <h3>
                <span>Language:</span> {movie.Language}
              </h3>
              <h3>
                <span>Released On:</span> {movie.Released}
              </h3>
              <h3>
                <span>Year:</span> {movie.Year}
              </h3>
              <h3>
                <span>Runtime:</span> {movie.Runtime}
              </h3>
              <h3>
                <span>Director:</span> {movie.Director}
              </h3>
              <h3>
                <span>Writer:</span> {movie.Writer}
              </h3>
              <h3>
                <span>Actors:</span> {movie.Actors}
              </h3>
              <h3>
                <span>BoxOffice:</span> {movie.BoxOffice}
              </h3>
              <h3>
                <span>Metascore:</span> {movie.Metascore}
              </h3>
              <h3>
                <span>Awards:</span> {movie.Awards}
              </h3>
              <h3>
                <span>IMDB Rating:</span> {movie.imdbRating}
              </h3>
              <h3>
                <span>IMDB Votes:</span> {movie.imdbVotes}
              </h3>
              <h3>
                <span>Ratings:</span>
                {movie?.Ratings ? (
                  <div>
                    {movie.Ratings.map((rating, index) => (
                      <ul key="index">
                        {rating.Source}: <span>{rating.Value}</span>
                      </ul>
                    ))}
                  </div>
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDeatils;
