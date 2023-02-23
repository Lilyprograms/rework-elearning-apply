import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/banner-img.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content container">
        <div className="banner-left">
          <h1 className="banner-left-text">
            <span>Begin</span> your Tech Career
          </h1>
          <p>
            Learn to code online, go from beginner to job ready in 9 months and connect to life-changing opportunities.
            No degree or prior tech experience required.
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
