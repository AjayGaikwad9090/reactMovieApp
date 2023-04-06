import React, { useEffect, useState, useCallback } from "react";
import "./movies.css";
import Card from "../card/Card";
import { useParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  const moviesList = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [type]);

  useEffect(() => {
    moviesList();
  }, [moviesList]);

  return (
    <>
      <div className="moviesList">
        <h2 className="contentTitle">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="cardsList">
          {movies.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
