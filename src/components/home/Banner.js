import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/banner-img.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content container">
        <div className="banner-left">
          <h1 className="banner-left-text">
            <span>Become </span> a Highly Skilled Tech Talent
          </h1>
          <p>
            Learn highly demanded tech skills and become a world-class tech talent, from anywhere, No experience Needed
            to enrol.
          </p>
          <Link to="/">Apply now</Link>
        </div>
        <div className="banner-right">
          <img src={img} alt="Learning Online" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
