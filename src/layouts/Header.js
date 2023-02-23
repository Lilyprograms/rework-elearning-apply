import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Rework-Academy-Logo.png";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import "../assets/styles/Header.css";

function Header() {
  const [nav, setNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const changeNav = () => {
    setNav((prev) => (prev === false ? (prev = true) : (prev = false)));
  };
  const setNavDefault = () => {
    setNav(false);
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={colorChange ? "header navBg" : nav ? "header header-active" : "header"}>
        <nav className="nav-header">
          <div className="nav-logo">
            <Link to="/" className="nav-logo-link" onClick={setNavDefault}>
              <img src={Logo} alt="Logo" />
              <span>Rework Academy</span>
            </Link>
          </div>
          <div className={nav ? "nav-menus nav-menus-active" : "nav-menus"}>
            <ul className="nav-menu1">
              <Link className="nav-links nav-links1" to="/about" onClick={setNavDefault}>
                About us
              </Link>
              <Link className="nav-links nav-links1" to="/courses" onClick={setNavDefault}>
                Courses
              </Link>
              <Link className="nav-links nav-links1" to="/pricing" onClick={setNavDefault}>
                Pricing
              </Link>
            </ul>
          </div>
          <div className={nav ? "nav-menus nav-menus-active" : "nav-menus"}>
            <ul className="nav-menu2">
              <a href="/" className="nav-links nav-links2" onClick={setNavDefault}>
                Login
              </a>
              <Link className="nav-links nav-links2" onClick={setNavDefault}>
                Apply now
              </Link>
            </ul>
          </div>
          {nav ? (
            <IoCloseSharp className="navi-menu" onClick={changeNav} />
          ) : (
            <IoMenuSharp className="navi-menu" onClick={changeNav} />
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
