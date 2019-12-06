import React, { useState, useEffect } from "react";
import "../styles/pages/navbar.scss";

const NavBar = () => {
  const [logged, setLogged] = useState(
    sessionStorage.getItem("logged") || false
  );
  useEffect(() => {
    sessionStorage.setItem("logged", logged);
  });
  return (
    <div expand="lg" className="menu-wrapper">
      <h1>logo</h1>
      <nav id="menu" role="navigation" className="navigation-menu">
        <div className="menu">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropbtn">
                Analytica
              </a>
              <div className="dropdown-content">
                <a href="#">Qualified Plans</a>
              </div>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>
        {!logged && (
          <a className="login" href="/login">
            Login/Sign up
          </a>
        )}
        {logged && (
          <a
            href="#"
            onClick={() => {
              setLogged(false);
            }}
            className="login"
          >
            Sign out
          </a>
        )}
      </h1>
    </div>
  );
};

export default NavBar;
