import React, { useState, useEffect } from "react";
import "../styles/pages/navbar.scss";

const NavBar = () => {
  const [logged, setLogged] = useState(
    localStorage.getItem("Token") || undefined
  );

  useEffect(() => {
    localStorage.setItem("logged", logged);
  });

  window.addEventListener("scroll", e => {
    const nav = document.getElementById("navigation");
    if (window.pageYOffset > 50) {
      nav.classList.add("affix");
    } else {
      nav.classList.remove("affix");
    }
  });

  return (
    <div className="navbar-content">
      <nav className="nav" id="navigation">
        <div className="container navbar-container">
          <div className="navbar-logo">
            <a href="/">
              <img
                id="logoimg"
                className="thelogo"
                src={require("../styles/images/transparent-black.png")}
                alt="no_image"
              />
            </a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/login">Data</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li className="dropdown">
                {logged ? (
                  <div>
                    <a className="dropbtn" href="/">
                      Hi,{localStorage.getItem("FirstName")}
                    </a>
                    <div className="dropdown-content">
                      <a href="/dashboard">Dashboard</a>
                      <a
                        href="/"
                        onClick={() => {
                          localStorage.clear();
                          setLogged(undefined);
                        }}
                      >
                        Sign Out
                      </a>
                    </div>
                  </div>
                ) : (
                  <a href="/login">Login</a>
                )}
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
