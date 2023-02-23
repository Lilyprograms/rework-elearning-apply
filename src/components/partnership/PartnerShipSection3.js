import React from "react";
import { Link } from "react-router-dom";

export default function PartnerShipSection3() {
  return (
    <div className="partnership_section3 space-top">
      <div className="p__sect3">
        <div className="p__sect3-content container">
          <div className="p__sect3-left">
            <h3>Begin your tech career</h3>
            <p>
              Do you want to work in tech? Rework Academy is ideal for you. Within a year, you can earn a top-tier
              technology education.
            </p>
          </div>
          <div className="p__sect3-right">
            <Link to="/">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
