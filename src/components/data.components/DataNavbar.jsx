import React from "react";
import "../../styles/dataPages/DataNavbar.scss";
import $ from "jquery";

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
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="dropdown">
              <div>
                <a className="dropbtn" href="/filters">
                  Lead Generator
                </a>
                <div className="dropdown-content">
                  <a href="/filters">Filters</a>
                  <a href="/saved-filters">Saved Filters</a>
                </div>
              </div>
            </li>
            <li>
              <a href="/bookmarks">Bookmarks</a>
            </li>
            <li className="dropdown">
              <div>
                <a className="dropbtn" href="/profile">
                  Hi,{sessionStorage.getItem("FirstName")}
                </a>
                <div className="dropdown-content">
                  <a href="/profile">Your Profile</a>
                  <a href="https://wealthanalytica.com/">Back to site</a>
                  <a
                    href="/"
                    onClick={() => {
                      sessionStorage.clear();
                    }}
                  >
                    Sign Out
                  </a>
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
