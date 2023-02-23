import React from "react";
import { Link } from "react-router-dom";

export default function PartnershipSection2() {
  return (
    <div className="patnership_section2 space-top">
      <div className="p__sect2 container">
        <div className="p__sect2-heading">
          <h2>Pathways to Partnership</h2>
          <p>These are some of the ways you can join us to make impact.</p>
        </div>
        <div className="p___sect2-content">
          <div className="p__sect2-box">
            <h3>Learning Pathway</h3>
            <p>
              Do you want to train the upcoming generation of top technologists? Team up with us to create top-notch
              educational content in a variety of fields.
            </p>
            <Link to="/become-a-partner">Become a partner</Link>
          </div>
          <div className="p__sect2-box">
            <h3>Financing Partners</h3>
            <p>
              At heavily subsidised rates, we are providing Africans with the skills they need to build profitable tech
              careers. Despite these concessions, a significant number of people are still unable to participate in our
              programs due to poor economic and financial conditions.
            </p>
            <Link to="/become-a-partner">Become a partner</Link>
          </div>
          <div className="p__sect2-box">
            <h3>Internship Pathway</h3>
            <p>
              Looking to hire one of our standout students? Utilise our network of highly skilled junior technologists
              who exude the right combination of competence, enthusiasm, and ambition. If you want to find the best
              talent for your team, click the button below.
            </p>
            <Link to="/become-a-partner">Become a partner</Link>
          </div>
          <div className="p__sect2-box">
            <h3>Innovation Hubs Partners</h3>
            <p>
              At Rework Academy, we encourage community involvement. If you would like to collaborate with us and have a
              physical location where our student community can share common interests, please click the button below.
            </p>
            <Link to="/become-a-partner">Become a partner</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
