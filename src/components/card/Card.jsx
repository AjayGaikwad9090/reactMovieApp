import React, { useEffect, useState } from "react";
import "./card.css";
// import Skeleton from 'react-loading-skeleton';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <>
      {isLoading ? (
        <div className="cardsLoader">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton duration={2} height={300} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link key={item.id} to={`/movie/${item.id}`}>
          <div className="card">
            <img
              className="cardImg"
              // width="300px"
              src={`https://image.tmdb.org/t/p/original/${
                item ? item.poster_path : ""
              }`}
              alt=""
            />
            <div className="cardData">
              <div className="cardTitle">
                <p>{item ? item.original_title : ""}</p>
              </div>
              <div className="cardMoreData">
                {item ? item.release_date : ""}
                <span className="rating">
                  {item ? item.vote_average : ""} <i className="fas fa-star" />
                </span>
              </div>
              <div className="cardDesc">
                <p>{item ? item.overview.slice(0, 115) + "..." : ""}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
