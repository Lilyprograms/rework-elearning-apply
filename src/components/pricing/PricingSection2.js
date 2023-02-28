import React from "react";
import { Link } from "react-router-dom";

export default function PricingSection2() {
  return (
    <div className="PricingSection2">
      <div className="container">
        <div className="PS2__content">
          <h2>Want to Learn more about our courses?</h2>
          <p>
            Our courses are carefully designed and structured to deliver the best quality to take you from beginner to
            advanced skill level.
          </p>
          <div className="PS2__content-links">
            <Link to="/courses" className="PS2__content-link1">
              Browse our courses
            </Link>
            <Link to="/apply" className="PS2__content-link2">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
