import React from "react";

import img from "../../assets/images/about.png";
export default function AboutSect1() {
  return (
    <div className="about_section">
      <div className="abount__sect1-grids container">
        <div className="a__sect1 a__sect1-grid">
          <h4>Our Story</h4>
          <h2>Rework Academy</h2>
        </div>
        <div className="a__sect11 a__sect1-grid">
          <p>
            Rework Academy is a skill development and placement company, with focus on filling the technical skill gap
            in Nigeria and Africa. We are building skills with global standard, adopting curriculum that takes
            individuals with zero skill to employable skilled talent.
          </p>
          <p>
            We deliver the most demanded technical skills by working with professionals who work everyday with the same
            skills. We have adopted curriculum with the most sorted after technical skills in the industry. Our
            curriculum is delivered by professionals with industry experience. The Focus is to get you industry ready
            with skills that get you hired and transform your Career
          </p>
        </div>
      </div>
      <div className="a__sect1-img space-top">
        <img src={img} alt="About Us" />
      </div>
    </div>
  );
}
