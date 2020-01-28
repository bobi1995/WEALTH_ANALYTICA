import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default () => {
  window.addEventListener("scroll", e => {
    const nav = document.getElementById("mainNav");
    if (window.pageYOffset > 100) {
      nav.classList.add("navbar-shrink");
    } else {
      nav.classList.remove("navbar-shrink");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">
          <img
            id="logoimg"
            className="thelogo"
            src={require("../../../styles/images/transparent-black.png")}
            alt="no_image"
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
