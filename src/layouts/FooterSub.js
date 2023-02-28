import React from "react";
import { Link } from "react-router-dom";

export default function FooterSub() {
  return (
    <div className="footer-subsect">
      <div className="container">
        <div className="footer-subsect__content">
          <h2>Become a highly skilled tech talent</h2>
          <p>
            Learn the most in-demand Full Stack Web Development with Node skills, Build real Projects with real
            developers
          </p>
          <Link to="/apply">Apply Now</Link>
        </div>
      </div>
    </div>
  );
}
