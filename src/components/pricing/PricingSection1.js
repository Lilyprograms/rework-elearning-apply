import React, { useState } from "react";
import { IoTimeOutline, IoBarChartOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

function PricingSection1() {
  const [currencyState, setCurrencyState] = useState(true);
  return (
    <>
      <div className="P__section1">
        <div className="P__Sect1-content container">
          <div className="p__sect1-btns">
            <button
              onClick={() => setCurrencyState(true)}
              className={`p__sect1-btn ${currencyState === true ? "activeCurrency" : ""}`}
            >
              NGN
            </button>
            <button
              onClick={() => setCurrencyState(false)}
              className={`p__sect1-btn ${currencyState === false ? "activeCurrency" : ""}`}
            >
              USD
            </button>
          </div>
          <div className="p__sect1-grids">
            <div className="P__sect1-grid P__sect1-grid1">
              {currencyState ? <h2>₦11,000 / Monthly</h2> : <h2>$25 / Monthly</h2>}
              <p>Opt in for our monthly payment plan to pay for each month</p>
              <div className="P__sect1-grid1-text2">
                <h2>Monthly Payment Plan</h2>
                <p>Choose our monthly payment plan, to pay as you learn.</p>
              </div>
              <div className="P_sect1-grid-card">
                <div className="P_sect1-flexed">
                  <p>
                    <IoTimeOutline className="P_sect1-flexed-icon" />
                    Duration
                  </p>
                  <p>9 months</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <IoBarChartOutline className="P_sect1-flexed-icon" /> Required Skill
                  </p>
                  <p>Beginner</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <TbCertificate className="P_sect1-flexed-icon" /> Certificate
                  </p>
                  <p>Yes</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <GoLocation className="P_sect1-flexed-icon" /> Location
                  </p>
                  <p>Online/Self-paced</p>
                </div>
              </div>
            </div>
            <div className="P__sect1-grid P__sect1-grid1">
              {currencyState ? <h2>₦33,000 / Quarterly</h2> : <h2>$75 / Quarterly</h2>}
              <p>Opt in for our monthly payment plan to pay for each month</p>
              <div className="P__sect1-grid1-text2">
                <h2>Quaterly Payment Plan</h2>
                <p>
                  Make payments quarterly, and get a <strong>10%</strong> discount off the overall fee
                </p>
              </div>
              <div className="P_sect1-grid-card">
                <div className="P_sect1-flexed">
                  <p>
                    <IoTimeOutline className="P_sect1-flexed-icon" />
                    Duration
                  </p>
                  <p>9 months</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <IoBarChartOutline className="P_sect1-flexed-icon" /> Required Skill
                  </p>
                  <p>Beginner</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <TbCertificate className="P_sect1-flexed-icon" /> Certificate
                  </p>
                  <p>Yes</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <GoLocation className="P_sect1-flexed-icon" /> Location
                  </p>
                  <p>Online/Self-paced</p>
                </div>
              </div>
            </div>
            <div className="P__sect1-grid P__sect1-grid1">
              {currencyState ? <h2>₦105,600 / Upfront</h2> : <h2>$240 / Upfront</h2>}
              <p>Opt in for our monthly payment plan to pay for each month</p>
              <div className="P__sect1-grid1-text2">
                <h2>Upfront Payment</h2>
                <p>
                  Make an upfront payment and get a <strong>20%</strong> discount off the overall fee
                </p>
              </div>
              <div className="P_sect1-grid-card">
                <div className="P_sect1-flexed">
                  <p>
                    <IoTimeOutline className="P_sect1-flexed-icon" />
                    Duration
                  </p>
                  <p>9 months</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <IoBarChartOutline className="P_sect1-flexed-icon" /> Required Skill
                  </p>
                  <p>Beginner</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <TbCertificate className="P_sect1-flexed-icon" /> Certificate
                  </p>
                  <p>Yes</p>
                </div>
                <div className="P_sect1-flexed">
                  <p>
                    <GoLocation className="P_sect1-flexed-icon" /> Location
                  </p>
                  <p>Online/Self-paced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection1;
