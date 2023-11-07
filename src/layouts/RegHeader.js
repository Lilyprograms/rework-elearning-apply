import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Rework-Academy-Logo.png";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import "../assets/styles/Nav.css";
import { AllContext } from "../contexts/DataContext";

function RegHeader() {
  const { loggedIn, setLoggedIn } = AllContext();
  const [nav, setNav] = useState(false);
  const setNavDefault = () => {
    setNav(false);
  };
  const changeNav = () => {
    setNav((prev) => (prev === false ? (prev = true) : (prev = false)));
  };

  const logOut = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("currentlyLogged");
    sessionStorage.removeItem("quiz");
  };

  return (
    <>
      <div className={nav ? "header header-active" : "header navBg"}>
        <nav className="nav-header">
          <div className="nav-logo">
            <Link to="/" className="nav-logo-link" onClick={setNavDefault}>
              <img src={Logo} alt="Logo" />
              <span>Rework Academy</span>
            </Link>
          </div>
          <div className={nav ? "nav-menus nav-menus-active" : "nav-menus"}>
            <ul className="nav-menu">
              {!loggedIn ? (
                <a className="nav-links" href="/login" onClick={setNavDefault}>
                  Login
                </a>
              ) : (
                <a className="nav-links" href="/login" onClick={logOut}>
                  Logout
                </a>
              )}
            </ul>
          </div>
          {nav ? <IoCloseSharp className="navi-menu" onClick={changeNav} /> : <IoMenuSharp className="navi-menu" onClick={changeNav} />}
        </nav>
      </div>
    </>
  );
}

export default RegHeader;
