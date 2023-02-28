import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "../assets/styles/Footer.css";
import { IoHeartSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const [date] = useState(new Date().getFullYear());
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contents">
          <div className="footer__content footer__content1">
            <div className="footer-content__img">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <span className="fc__content-icon-title">Connect with us:</span>
            <div className="fc__content-icons">
              <a href="https://www.instagram.com/reworkacademy/">
                <FaInstagram className="fc__content-icon" />
              </a>
              <a href="https://web.facebook.com/ReworkAcademy">
                <FaFacebookF className="fc__content-icon" />
              </a>
              <a href="https://twitter.com/ReworkAcademy">
                <FaTwitter className="fc__content-icon" />
              </a>
              <a href="https://www.linkedin.com/company/reworkacademy/">
                <FaLinkedinIn className="fc__content-icon" />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-content__sub">
              <h3>Contact</h3>
              <div className="footer-content__contact">
                <IoCallSharp className="fc__contact-icon" />
                <a href="tel:+234 0703 561 6981" target={"_blank"} rel="noreferrer">
                  +234 703 561 6891
                </a>
              </div>
              <div className="footer-content__contact">
                <IoMailSharp className="fc__contact-icon" />
                <a href="mailto:academy@reworktechnologies.com">academy@reworktechnologies.com</a>
              </div>
            </div>
          </div>
          <div className="footer__content footer__content2">
            <h3>Courses</h3>
            <ul className="footer-content__list">
              <li>
                <Link to={"/courses/front-end-development"}>Frontend Development</Link>
              </li>
              <li>
                <Link to={"/course/full-stack-web-development-nodejs"}>Full Stack Development with Node JS</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content footer__content3">
            <h3>Company</h3>
            <ul className="footer-content__list">
              <li>
                <Link to="/why-rework-academy">Why Rework Academy</Link>
              </li>
              <li>
                <a href="http://www.reworktechnologies.com/" target="_blank" rel="noreferrer">
                  Parent Company
                </a>
              </li>
              <li>
                <Link to={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sub__contents">
          <p>&copy;{date} Rework Academy. All rights reserved</p>
          <div>
            <p className="footer__heart-cont">
              Made with <IoHeartSharp className="footer__heart-icon" /> from
              <a href="http://www.reworktechnologies.com/" target="_blank" rel="noopener noreferrer">
                Rework Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
