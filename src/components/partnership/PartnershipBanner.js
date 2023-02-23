import React from "react";
import { Link } from "react-router-dom";

export default function PartnshipBanner() {
  return (
    <div className="partnership_banner">
      <div className="p__banner container space-top">
        <div className="p__banner-content">
          <h2>Partner with us</h2>
          <p>Let’s join hands in inspiring the next generation of top Software Engineers?</p>
          <Link to="/become-a-partner">Become a partner</Link>
        </div>
      </div>
    </div>
  );
}
