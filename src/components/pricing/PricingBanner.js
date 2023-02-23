import React from "react";
import { Link } from "react-router-dom";

export default function PricingBanner() {
  return (
    <div className="pricing_banner">
      <div className="space-top container">
        <div className="P__banner-content">
          <h2>Flexible Tuition plan for high-quality tech education</h2>
          <p>Opt in for our monthly based payment plan</p>
          <Link to="/courses">Apply now</Link>
        </div>
      </div>
    </div>
  );
}
