import React, { useState, useEffect } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Movies from "../../components/movies/Movies";
const Home = () => {
  const [popularMovies, setPopularmovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularmovies(data.results));
  }, []);
  // console.log(popularMovies);
  return (
    <>
      <div className="movieslider">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={1}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          {popularMovies.map((item) => (
            <Link key={item.id} to={`/movies/${item.id}`}>
              <div className="movieSlideImg">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    item && item.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="movieSlidedata">
                <div className="movieSlidetitle">
                  <p>{item ? item.original_title : ""}</p>
                </div>
                <div className="additionalSlideData">
                  {item.release_date}
                  <span className="movieSlideRating">
                    {item ? item.vote_average : ""}
                    <i className="fas fa-star" />
                    {""}
                  </span>
                </div>
                <div className="movieSlideDesc">
                  <p>{item ? item.overview : ""}</p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <Movies />
      </div>
    </>
  );
};

export default Home;
