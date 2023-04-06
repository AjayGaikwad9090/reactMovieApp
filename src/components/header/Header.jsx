import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="logo"
            width="90px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Eo_circle_yellow_film-camera.svg/1200px-Eo_circle_yellow_film-camera.svg.png"
            alt=""
          />
        </Link>
        <Link className="comLinks" to="/movies/upcoming">
          Upcoming
        </Link>
        <Link className="comLinks" to="/movies/popular">
          Popular
        </Link>
        <Link className="comLinks" to="/movies/top_rated">
          Top Rated
        </Link>
      </div>
    </div>
  );
};

export default Header;
