import React from "react";
import { Link } from "react-router-dom";

function CDBanner() {
  return (
    <>
      <div className="navSpace"></div>
      <div className="CD_banner">
        <div className="CD--content container">
          <h2>Full Stack Web development with Node</h2>
          <p>
            An in-depth, flexible, 960-hour online web developer course to prepare you for a successful career in web
            development.
          </p>
          <Link to="/apply" className="btns-primary">
            Apply now
          </Link>
        </div>
      </div>
    </>
  );
}

export default CDBanner;
