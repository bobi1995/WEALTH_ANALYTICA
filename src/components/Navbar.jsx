import React from "react";
import "../styles/pages/navbar.scss";

const NavBar = () => {
  return (
    <div expand="lg" className="menu-wrapper">
      <h1>logo</h1>
      <nav id="menu" role="navigation" className="navigation-menu">
        <div className="menu">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
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
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>
        <a className="login" href="/login">
          Login/Sign up
        </a>
      </h1>
    </div>
  );
};

export default NavBar;
