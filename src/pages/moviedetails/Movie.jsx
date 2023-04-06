import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    moviesData();
    // window.scrollTo(0.0);
  });
  const moviesData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };
  return (
    <>
      <div className="moviedata">
        <div className="movieBanner">
          <img
            src={` https://image.tmdb.org/t/p/original/${
              movieDetail ? movieDetail.backdrop_path : ""
            }`}
            alt=""
            className="banner"
          />
        </div>
        <div className="movieInfo">
          <div className="info1">
            <div className="movieImg">
              <img
                src={` https://image.tmdb.org/t/p/original/${
                  movieDetail ? movieDetail.poster_path : ""
                }`}
                alt=""
                className="poster"
              />
            </div>
          </div>
          <div className="info2">
            <div className="info2Top">
              <div className="movieTitle">
                <p>{movieDetail ? movieDetail.original_title : ""}</p>
              </div>
              <div className="movieRating">
                {movieDetail ? movieDetail.vote_average : ""}{" "}
                <i class="fas fa-star" />
                <span className="movieVoteCount">
                  {movieDetail ? "(" + movieDetail.vote_count + ") Votes" : ""}
                </span>
              </div>
              <div className="moviePopularityScore">
                <p>
                  {" "}
                  Popularity Score : {movieDetail ? movieDetail.popularity : ""}
                </p>
              </div>
              <div className="movieReleaseDate">
                <p>
                  {movieDetail
                    ? "Release date : " + movieDetail.release_date
                    : ""}
                </p>
              </div>
            </div>
            <div className="info2Bottom">
              <h1>Synopsis</h1>
              <p>{movieDetail ? movieDetail.overview : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
