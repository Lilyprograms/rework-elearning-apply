import React from "react";
import { Link } from "react-router-dom";

function HomeSection1() {
  return (
    <div className="home_section1">
      <div className="hs1--content grid1 container">
        <div className="hs1--left">
          <h3>We are making an impact on the future of work.</h3>
        </div>
        <div className="hs1--right">
          <p>
            Rework Academy is not like other educational institutions. We are a bootcamp for people who want to learn
            technical skills and start a career in technology. We take a non-traditional approach to learning by
            teaching courses that are directly related to the chosen track.
          </p>
          <p>
            Our comprehensive curriculum, which combines theoretical knowledge with practical real-world applications,
            guarantees that anyone can become a top Software Engineer in less than one year.
          </p>
          <Link to="/" className="btns-primary">Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
