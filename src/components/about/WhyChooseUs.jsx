import React from "react";
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";

function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="why-choose-us__content container">
        <div className="wcu__contents">
          <div className="wcu__content">
            <img src={Icon1} alt="Icon" />
            <h4>Project-Based Training and Mentoring</h4>
          </div>
          <div className="wcu__content">
            <img src={Icon2} alt="Icon" />
            <h4>Get Job Ready Skills, No experience Needed to enrol</h4>
          </div>
          <div className="wcu__content">
            <img src={Icon3} alt="Icon" />
            <h4>Flexible Monthly Payment Plan, Pay as you Learn</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
