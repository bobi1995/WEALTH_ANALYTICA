import React from "react";
import "../../styles/dataPages/DataNavbar.scss";
import $ from "jquery";
import { NavLink } from "react-router-dom";

const DataNavbar = () => {
  window.addEventListener("scroll", (e) => {
    const nav = document.getElementById("data-navigation");
    if (window.pageYOffset > 50) {
      nav.classList.add("affix");
    } else {
      nav.classList.remove("affix");
    }
  });
  const navTrigger = () => {
    $(".data-navTrigger").click(function() {
      $(this).toggleClass("active");
      $("#data-mainListDiv").toggleClass("show_list");
      $("#data-mainListDiv").fadeIn();
    });
  };

  return (
    <div className="data-navbar-content" data-html2canvas-ignore>
      <nav className="data-nav" id="data-navigation">
        <div id="data-mainListDiv" className="data-main_list">
          <ul className="data-navlinks">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="dropdown">
              <div>
                <NavLink className="dropbtn" to="/filters">
                  Lead Generator
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="/filters" style={{ fontSize: "23px" }}>
                    Filters
                  </NavLink>
                  <NavLink to="/saved-filters" style={{ fontSize: "23px" }}>
                    Saved Filters
                  </NavLink>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/bookmarks">Bookmarks</NavLink>
            </li>
            <li className="dropdown">
              <div>
                <NavLink className="dropbtn" to="/account">
                  Hi,{localStorage.getItem("FirstName")}
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="/account" style={{ fontSize: "23px" }}>
                    Your Profile
                  </NavLink>
                  <NavLink
                    to="https://wealthanalytica.com/"
                    style={{ fontSize: "23px" }}
                  >
                    Back to site
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={() => {
                      localStorage.clear();
                    }}
                    style={{ fontSize: "23px" }}
                  >
                    Sign Out
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
          <span
            onClick={navTrigger}
            id="navTrigger"
            className="data-navTrigger"
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default DataNavbar;
