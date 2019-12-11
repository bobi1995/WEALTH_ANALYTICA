import React from "react";
import "../../styles/dataPages/DataNavbar.scss";
import $ from "jquery";

const DataNavbar = () => {
  window.addEventListener("scroll", e => {
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
    <div className="data-navbar-content">
      <nav className="data-nav" id="data-navigation">
        <div id="data-mainListDiv" className="data-main_list">
          <ul className="data-navlinks">
            <li>
              <a href="/about">Dashboard</a>
            </li>
            <li>
              <a href="#">Heatmap</a>
            </li>
            <li>
              <a href="/contact">Filters</a>
            </li>
            <li>
              <a href="/contact">Bookmakrs</a>
            </li>
            <li>
              <a href="/contact">OnePager</a>
            </li>
            <li>
              <a href="/contact">PlanProfile</a>
            </li>
            <li className="logout-li">
              <a href="/contact">LogOut</a>
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
