import React from "react";
import img from "../../assets/images/hs2-img.png";

function HomeSection2() {
  return (
    <div className="home-section2">
      <div className="hs2--content container">
        <div className="hs2-img">
          <img src={img} alt="Online Learning" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
