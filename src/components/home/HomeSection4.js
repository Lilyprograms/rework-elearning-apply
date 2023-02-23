import React from "react";
import { Link } from "react-router-dom";

function HomeSection4() {
  return (
    <div className="home_section4">
      <div className="hs4--content container">
        <div className="hs4--grid grid1">
          <div className="hs4--left">
            <h2>A great learning experience.</h2>
            <p>
              Rework invests in you. We support you throughout your journey with us and your career. You can pay
              flexibly, collaborate with co-learners, gain access to global opportunities, through the process we will
              provide support and accountability towards achieving your dreams.
            </p>
            <Link to="/courses" className="btns-primary">
              Explore courses
            </Link>
          </div>
          <div className="hs4--right"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection4;
