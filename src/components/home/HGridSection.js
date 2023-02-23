import React from "react";

function HGridSection({ LT_header, LT1, LT2, Rimg }) {
  return (
    <div className="grid_sections">
      <div className="h_grid--content">
        <div className="grid1">
          <div className="h_grid--left">
            <h2>{LT_header}</h2>
            <p>{LT1}</p>
            <p>{LT2}</p>
          </div>
          <div className="h_grid--right">
            <img src={Rimg} alt="Collaborative Learning" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HGridSection;
