import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="movieLogo">
        <img
          className="logo"
          width="90px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Eo_circle_yellow_film-camera.svg/1200px-Eo_circle_yellow_film-camera.svg.png"
          alt=""
        />
      </div>
      <div className="copyright">
        <p>&#169; Copyrights All Rights Reserved</p>
      </div>
      <div className="about">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos
          atque eum voluptas accusantium eligendi minima necessitatibus facere
        </p>
      </div>
    </div>
  );
};

export default Footer;
